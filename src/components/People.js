import moment from "moment-timezone/builds/moment-timezone-with-data-2012-2022.min";
import { getState } from "../helpers/state";

const getOffsetCopy = (diffInHours) => {
  if (diffInHours === 0) {
    return "Local time";
  }
  return `${diffInHours < 0 ? "" : "+"}${diffInHours} hours`;
}

const sortAndCalculateTimezones = () => {
  const currentState = { ...getState() };
  const people = currentState.people.map(person => {
    const localOffset = getState().currentTime.tz(getState().timezone).utcOffset();
    const personOffset = getState().currentTime.tz(person.timezone).utcOffset();
    return {
      ...person,
      diffInHours: (localOffset - personOffset) / 60,
    }
  });

  people.sort((a, b) => {
    return a.diffInHours - b.diffInHours;
  });

  return people;
};

export default () => {
  const people = sortAndCalculateTimezones();

  return `
    <ul class="cc-ttz:people">
      ${people.map((person, index) => (`
        <li class="cc-ttz:timezoneItem ${index === 0 ? "cc-ttz:timezoneItemFirst" : ""} ${index + 1 === getState().people.length ? "cc-ttz:timezoneItemLast" : ""}">
          <span class="cc-ttz:timezoneDate">${ getState().currentTime.tz(person.timezone).format("MMM D") }</span>
          <h3 class="cc-ttz:timezoneTime">${ getState().currentTime.tz(person.timezone).format("h:mm a") }</h3>
          <span class="cc-ttz:timezoneOffset">${getOffsetCopy(person.diffInHours)}</span>
          <div class="cc-ttz:personAvatar">
            <img class="cc-ttz:personAvatarImage" src="${ person.avatar }" />
          </div>
          <span class="cc-ttz:personName">${ person.name }</span>
        </li>
      `)).join("")}
    </ul>
  `;
}

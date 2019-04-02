import ClockIcon from "./ClockIcon";
import { getState } from "../helpers/state";

export default () => (`
  <div class="cc-ttz:currentContainer" ${getState().editing ? 'style="display: none;"' : ""}>
    <h2 class="cc-ttz:currentTime">
      ${ClockIcon}
      ${getState().currentTime.format("h:mm a")}

      ${getState().showingCustom ?
        `<button class="cc-ttz:cancel">Clear</button>` :
        `<button class="cc-ttz:enterTime">Enter time</button>`
      }
    </h2>

    <p class="cc-ttz:currentTimezoneContainer">
      ${getState().showingCustom ?
        `<span class="cc-ttz:currentTimezoneLabel cc-ttz:currentTimezoneCustom">Custom time</span>` :
        `<span class="cc-ttz:currentTimezoneLabel">Current time</span>`
      }
      <span class="cc-ttz:currentTimezoneAbbr">${getState().currentTime.tz(getState().timezone).format("z")}</span>
    </p>
  </div>
`);

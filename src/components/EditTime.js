import ClockIcon from "./ClockIcon";
import { getState } from "../helpers/state";

export default () => (`
  <form class="cc-ttz:form" ${getState().editing ? "" : 'style="display: none;"'}>
    <fieldset class="cc-ttz:formFieldset">
      <input value="" class="cc-ttz:formInput" type="text" placeholder="Enter time">
      <span class="cc-ttz:formTimezoneAbbr">${ getState().currentTime.tz(getState().timezone).format("z") }</span>
    </fieldset>
    <div class="cc-ttz:formButtons">
      <button type="submit" class="cc-ttz:buttonApply">Apply</button>
      <button class="cc-ttz:cancel cc-ttz:buttonCancel">Cancel</button>
    </div>
  </form>
`);

import CurrentTime from "./CurrentTime";
import EditTime from "./EditTime";
import People from "./People";
import { getState } from "../helpers/state";
import ClockIcon from "./ClockIcon";

export default () => (`
  <section class="cc-ttz:container">
    <header class="cc-ttz:header">
      <h1 class="cc-ttz:title">
        ${ClockIcon}
        Team Timezones
      </h1>
      ${CurrentTime()}
      ${EditTime()}
    </header>
    ${People()}
  </section>
`);

import moment from "moment-timezone/builds/moment-timezone-with-data-2012-2022.min";
import Layout from "./components/Layout";
import insertStyles from "./helpers/insertStyles";
import delegateEvents from "./helpers/delegateEvents";
import { getState, setState } from "./helpers/state";

export default (id, people, styleOverrides) => {
  // setup styles and event delegation (do once)
  if (styleOverrides != false) {
    insertStyles(styleOverrides, id);
  }
  delegateEvents();

  // set state, which will re-render dom
  setState({
    Layout,
    targetId: id,
    currentTime: moment(),
    timezone: moment.tz.guess(),
    people: people,
    editing: false,
    showingCustom: false,
  });

  setInterval(() => {
    // set state, with updated time every 60 seconds
    if (!getState().showingCustom) {
      setState({
        currentTime: moment(),
      });
    }
  }, 60000);
};

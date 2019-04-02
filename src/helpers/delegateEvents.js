import moment from "moment-timezone/builds/moment-timezone-with-data-2012-2022.min";
import { setState } from "./state";

export default () => {
  document.addEventListener("click", (event) => {
  	if (event.target.matches('.cc-ttz\\:enterTime')) {
      event.preventDefault();
      setState({ editing: true });
      document.getElementsByClassName("cc-ttz:formInput")[0].focus();
  	}
  	if (event.target.matches('.cc-ttz\\:cancel')) {
      event.preventDefault();
      setState({
        editing: false,
        showingCustom: false,
        currentTime: moment(),
      });
  	}
  }, false);
  document.addEventListener("submit", (event) => {
  	if (event.target.matches('.cc-ttz\\:form')) {
      event.preventDefault();
      const time = document.getElementsByClassName("cc-ttz:formInput")[0].value;

      setState({
        editing: false,
        showingCustom: true,
        currentTime: moment(time, ["h:mm A"]),
      });
  	}
  }, false);
};

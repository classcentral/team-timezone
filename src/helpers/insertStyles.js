import style from "../team-timezone.style.js";

const insertStyles = (props) => {
  const css = style(props);
  const headEl = document.head;
  const styleEl = document.createElement("style");
  let str = "";

  styleEl.type = "text/css";
  headEl.appendChild(styleEl);

  for (let prop in css) {
    str = `${str}.cc-ttz\\:${prop} { ${css[prop]} } `
  }

  styleEl.appendChild(document.createTextNode(str));
}

export default insertStyles;

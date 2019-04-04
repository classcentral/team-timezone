export default (id, layout) => {
  document.getElementById(id).innerHTML = layout();
}

export default (handler) => {
  global.document.addEventListener('click', () => handler())
}

export function kata() {
  const element = document.querySelectorAll("section h2");
  for (let i = 0; i < element.length; i++) {
  element[i].classList.add("title");
  }
}

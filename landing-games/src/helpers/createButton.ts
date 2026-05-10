export function createButton(
  text: string,
  func: (event: MouseEvent) => void,
  style: string = "",
): HTMLButtonElement {
  const button = document.createElement("button");
  if (style) button.classList.add(style);
  button.innerText = text;
  button.addEventListener("click", func);

  return button;
}

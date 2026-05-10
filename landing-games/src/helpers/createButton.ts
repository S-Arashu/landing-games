import type { InsertMethod } from "./createElement";

type TypeButton = "button" | "a";

export function createButton(
  text: string,
  options: {
    parent?: HTMLElement;
    insertMethod?: InsertMethod;
    func?: (event: MouseEvent) => void;
    type?: TypeButton;
    style?: string[];
    attr?: Record<string, string>;
  } = {},
): HTMLButtonElement | HTMLAnchorElement {
  const {
    parent,
    insertMethod = "append",
    func,
    type = "button",
    style,
    attr,
  } = options;

  const button = document.createElement(type);

  if (style) {
    style.forEach((el) => {
      button.classList.add(el);
    });
  }
  button.innerText = text;

  if (type === "button") {
    const btn = button as HTMLButtonElement;
    if (func) btn.addEventListener("click", func);
  }

  if (attr) {
    Object.entries(attr).forEach(([key, value]) => {
      button.setAttribute(key, value);
    });
  }

  if (parent) parent[insertMethod](button);

  return button;
}

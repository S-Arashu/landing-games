export type InsertMethod =
  | "append"
  | "prepend"
  | "before"
  | "after"
  | "replaceWith";

interface ElementOptions {
  parent?: HTMLElement;
  insertMethod?: InsertMethod;
  style?: string[];
  attr?: Record<string, string>;
  text?: string;
  innerHTML?: boolean;
}

export function createElement<T extends keyof HTMLElementTagNameMap>(
  type: T,
  options: ElementOptions = {},
): HTMLElementTagNameMap[T] {
  const {
    parent,
    insertMethod = "append",
    style,
    attr,
    text,
    innerHTML = false,
  } = options;
  const el = document.createElement(type);
  if (attr) {
    Object.entries(attr).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
  }

  if (style) {
    style.forEach((elem) => {
      el.classList.add(elem);
    });
  }

  if (text) {
    if (innerHTML) {
      el.innerHTML = text;
    } else {
      el.innerText = text;
    }
  }

  if (parent) parent[insertMethod](el);

  return el;
}

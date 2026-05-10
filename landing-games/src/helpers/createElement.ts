type InsertMethod = "append" | "prepend" | "before" | "after" | "replaceWith";

interface ElementOptions {
  parent?: HTMLElement;
  insertMethod?: InsertMethod;
  style?: string;
  attr?: Record<string, string>;
  text?: string;
}

export function createElement<T extends keyof HTMLElementTagNameMap>(
  type: T,
  options: ElementOptions = {},
): HTMLElementTagNameMap[T] {
  const { parent, insertMethod = "append", style, attr, text } = options;
  const el = document.createElement(type);
  if (attr) {
    Object.entries(attr).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
  }
  if (style) el.classList.add(style);

  if (text) el.innerText = text;

  if (parent) parent[insertMethod](el);

  return el;
}

import { createButton } from "../../helpers/createButton";
import { createElement } from "../../helpers/createElement";
import styles from "./header.module.css";

export function Header() {
  const header = createElement("header", {
    parent: document.body,
    style: [styles.header],
  });

  const container = createElement("div", {
    parent: header,
    style: ["container"],
  });

  const headerWrapper = createElement("div", {
    parent: container,
    style: [styles.headerWrapper],
  });

  createElement("img", {
    parent: headerWrapper,
    style: [styles.headerLogo],
    attr: {
      src: "/logo-games.png",
      alt: "Logo",
    },
  });

  const headerNav = createElement("nav", {
    parent: headerWrapper,
    style: [styles.headerNav],
  });

  const headerBadge = createElement("span", {
    parent: headerNav,
    style: [styles.headerBadge],
    text: `🌙   Лес открыт 24/7`,
  });

  const btnLogIn = createButton("Войти", {
    parent: headerNav,
    func: openModalLogIn,
    style: ["btn", "btnOutline"],
  });

  const btnRegistration = createButton("Регистрация", {
    parent: headerNav,
    func: openModalRegistration,
    style: ["btn", "btnPrimary"],
  });

  const burger = createElement("img", {
    parent: headerWrapper,
    style: [styles.headerBurger],
    attr: {
      src: "/totoro-assistant.png",
      alt: "Меню",
    },
  });

  burger.addEventListener("click", () => {
    document.body.style.overflow = "hidden";

    const overlay = createElement("div", {
      parent: document.body,
      style: [styles.overlay],
    });

    const burgerModal = createElement("div", {
      parent: overlay,
      style: [styles.burgerModal],
    });

    burgerModal.append(headerBadge);
    burgerModal.append(btnLogIn);
    burgerModal.append(btnRegistration);

    overlay.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        overlay.remove();
        document.body.style.overflow = "";
      }
    });
  });

  function openModalLogIn() {
    return;
  }

  function openModalRegistration() {
    return;
  }

  return header;
}

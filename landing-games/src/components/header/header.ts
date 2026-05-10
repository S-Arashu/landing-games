import { createButton } from "../../helpers/createButton";
import { createElement } from "../../helpers/createElement";
import styles from "./header.module.css";

export function Header() {
  const container = createElement("div", {
    parent: document.body,
    style: "container",
  });

  const header = createElement("header", {
    parent: container,
    style: styles.header,
  });

  const logo = createElement("img", {
    parent: header,
    style: styles.headerLogo,
    attr: {
      src: "/logo-games.png",
      alt: "Logo",
    },
  });

  const headerNav = createElement("nav", {
    parent: header,
    style: styles.headerNav,
  });

  const headerBadge = createElement("span", {
    parent: headerNav,
    style: styles.headerBadge,
    text: `🌙   Лес открыт 24/7`,
  });

  const btnLogIn = createButton("Войти", openModalLogIn, styles.btnOutline);
  headerNav.append(btnLogIn);

  const btnRegistration = createButton(
    "Регистрация",
    openModalRegistration,
    styles.btnPrimary,
  );
  headerNav.append(btnRegistration);

  const burger = createElement("img", {
    parent: header,
    style: styles.headerBurger,
    attr: {
      src: "/totoro-assistant.png",
      alt: "Меню",
    },
  });

  burger.addEventListener("click", () => {
    document.body.style.overflow = "hidden";

    const overlay = createElement("div", {
      parent: document.body,
      style: styles.overlay,
    });

    const burgerModal = createElement("div", {
      parent: overlay,
      style: styles.burgerModal,
    });

    burgerModal.append(headerBadge);
    burgerModal.append(btnLogIn);
    burgerModal.append(btnRegistration);

    overlay.addEventListener("click", () => {
      overlay.remove();
      document.body.style.overflow = "";
    });
  });

  function openModalLogIn() {
    return;
  }

  function openModalRegistration() {
    return;
  }

  return container;
}

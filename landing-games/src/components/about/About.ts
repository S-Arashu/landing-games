import { createElement } from "../../helpers/createElement";
import styles from "./About.module.css";

export function About() {
  const aboutSection = createElement("section", {
    parent: document.body,
    style: [styles.aboutSection],
    attr: {
      id: "about",
    },
  });

  const container = createElement("div", {
    parent: aboutSection,
    style: ["container"],
  });

  const aboutLayout = createElement("div", {
    parent: container,
    style: [styles.aboutLayout],
  });

  const aboutDesc = createElement("div", {
    parent: aboutLayout,
    style: [styles.aboutDesc],
  });

  const sectionEyebrow = createElement("p", {
    parent: aboutDesc,
    style: [styles.sectionEyebrow],
    text: "О казино",
  });

  const sectionTitle = createElement("h2", {
    parent: aboutDesc,
    style: [styles.sectionTitle],
    innerHTML: true,
    text: "Место, где <em>магия встречает</em> большие выигрыши",
  });

  // const sectionTitleEm = createElement("em", {
  //   parent: sectionTitle,
  //   style: [styles.sectionTitleEm],
  //   text: "магия встречает",
  // });

  // const sectionTitleNext = createElement("h2", {
  //   parent: sectionTitle,
  //   style: [styles.sectionTitle],
  //   text: " большие выигрыши",
  // });

  const prose = createElement("div", {
    parent: aboutDesc,
    style: [styles.prose],
  });

  const content = [
    "<strong>Казино Духов</strong> &mdash; это не просто онлайн-казино. Это портал в мир, где каждый слот рассказывает историю, каждая рулетка кружится в ритме ветра, а каждый выигрыш сопровождается одобрительным взглядом Тоторо из ближайшего дерева.",
    "Мы предлагаем <em>более 3000 игр</em> от лучших провайдеров: живые дилеры (они настоящие, мы проверяли), слоты с феями и призраками, покер для тех, кто не боится духов, и рулетку, которая крутится строго по закону природы.",
    "<strong>Вывод средств</strong> &mdash; дело пяти минут. Если дольше, значит, котобус застрял в пробке. Мы ему позвоним.",
    "Не беспокойтесь об безопасности: каждый депозит защищён SSL-заклинанием 256-го уровня, а ваши данные хранит Безликий под надёжным замком в бане духов.",
  ];

  for (let i = 0; i < content.length; i += 1) {
    const paragraph = createElement("p", {
      parent: prose,
      innerHTML: true,
      text: content[i],
    });
  }

  const aboutTable = createElement("div", {
    parent: aboutLayout,
    style: [styles.aboutTable],
  });

  const table = createElement("div", {
    parent: aboutTable,
    style: [styles.bonusTable],
  });

  ["Депозит", "Бонус", "Фриспины", "Промокод"].forEach((text) => {
    createElement("div", {
      parent: table,
      style: [styles.tableHead],
      text,
    });
  });

  const NBSP = "\u00A0";

  const rows = [
    [`500${NBSP}–${NBSP}1${NBSP}999${NBSP}₽`, "100%", `50${NBSP}FS`, "FOREST1"],
    [
      `2${NBSP}000${NBSP}–${NBSP}9${NBSP}999${NBSP}₽`,
      "150%",
      `100${NBSP}FS`,
      "FOREST2",
    ],
    [`от${NBSP}10${NBSP}000${NBSP}₽`, "200%", `150${NBSP}FS`, "FOREST500"],
  ];

  rows.forEach((row) => {
    row.forEach((text) => {
      createElement("div", {
        parent: table,
        style: [styles.tableCell],
        text,
      });
    });
  });

  const sectionNote = createElement("p", {
    parent: aboutTable,
    style: [styles.sectionNote],
    text: "* Вейджер ×30. Тоторо перечитал условия. Всё честно.",
  });

  const ornamentDivider = createElement("div", {
    parent: aboutLayout,
    style: [styles.ornamentDivider],
    text: `✦ ${NBSP}${NBSP} ✦ ${NBSP}${NBSP} ✦ ${NBSP}${NBSP} ✦ ${NBSP}${NBSP} ✦`,
  });

  return aboutSection;
}

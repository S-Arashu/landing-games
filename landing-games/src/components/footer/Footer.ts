import { createElement } from "../../helpers/createElement";
import styles from "./Footer.module.css";

export function Footer() {
  const footer = createElement("footer", {
    parent: document.body,
    style: [styles.footer],
  });

  const container = createElement("div", {
    parent: footer,
    style: ["container"],
  });

  const footerTop = createElement("div", {
    parent: container,
    style: [styles.footerTop],
  });

  const footerBrand = createElement("div", {
    parent: footerTop,
    style: [styles.footerBrand],
  });

  createElement("img", {
    parent: footerBrand,
    style: [styles.footerTopImg],
    attr: {
      src: "/logo-games.png",
      alt: "logo",
    },
  });

  createElement("p", {
    parent: footerBrand,
    style: [styles.footerTopDesc],
    text: "Лес всегда зовёт. Мы просто открыли там казино. Играйте ответственно — духи смотрят.",
  });

  const paymentIcons = createElement("div", {
    parent: footerBrand,
    style: [styles.paymentIcons],
  });

  const payments = ["VISA", "MC", "QIWI", "СБП", "BTC"];

  for (let i = 0; i < payments.length; i += 1) {
    createElement("span", {
      parent: paymentIcons,
      style: [styles.paymentIcon],
      text: payments[i],
    });
  }

  const footerNav = [
    ["Казино", "Слоты", "Живые игры", "Покер", "Рулетка", "Crash-игры"],
    [
      "Бонусы",
      "Приветственный",
      "Фриспины",
      "Кешбэк",
      "VIP-программа",
      "Промокоды",
    ],
    [
      "Помощь",
      "Поддержка 24/7",
      "FAQ",
      "Ответственная игра",
      "Верификация",
      "Контакты",
    ],
  ];

  for (let i = 0; i < footerNav.length; i += 1) {
    const footerCol = createElement("div", {
      parent: footerTop,
      style: [styles.footerCol],
    });

    createElement("h4", {
      parent: footerCol,
      style: [styles.footerColTitle],
      text: footerNav[i][0],
    });

    const footerColList = createElement("ul", {
      parent: footerCol,
      style: [styles.footerColList],
    });

    for (let k = 1; k < footerNav[i].length; k += 1) {
      const footerColItem = createElement("li", {
        parent: footerColList,
        style: [styles.footerColItem],
      });

      createElement("a", {
        parent: footerColItem,
        style: [styles.footerColLink],
        attr: {
          href: "#",
        },
        text: footerNav[i][k],
      });
    }
  }

  createElement("hr", {
    parent: container,
    style: [styles.footerDivider],
  });

  const footerBottom = createElement("div", {
    parent: container,
    style: [styles.footerBottom],
  });

  createElement("p", {
    parent: footerBottom,
    style: [styles.footerLegal],
    text: "© 2024 Казино Духов. Лицензия №GLH-OCCHKTW0710102024. Все права защищены лесными духами. Минимальный возраст для участия в азартных играх — 18 лет. Азартные игры могут вызывать зависимость. Играйте ответственно. Если лес зовёт слишком часто, обратитесь на горячую линию: 8-800-700-4742 (бесплатно). Тоторо одобрил это сообщение. Мы не несём ответственности за внезапное обогащение и последующую эйфорию.",
  });

  createElement("div", {
    parent: footerBottom,
    style: [styles.footerAge],
    text: "18+",
  });

  return footer;
}

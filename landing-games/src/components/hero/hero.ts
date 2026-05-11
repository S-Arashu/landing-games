import { createButton } from "../../helpers/createButton";
import { createElement } from "../../helpers/createElement";
import styles from "./hero.module.css";

export function Hero() {
  const container = createElement("div", {
    parent: document.body,
    style: ["container"],
  });

  const heroSection = createElement("section", {
    parent: container,
    style: [styles.hero],
  });

  const promoSection = createElement("div", {
    parent: heroSection,
    style: [styles.heroPromo],
  });

  createElement("img", {
    parent: heroSection,
    style: [styles.heroImg],
    attr: {
      alt: "Казино духов в мистическом лесу",
      loading: "eager",
      src: "/hero-polaroid.png",
    },
  });

  createElement("p", {
    parent: promoSection,
    style: [styles.promoWelcome],
    text: "✦ Добро пожаловать туда, откуда не возвращаются без выигрыша ✦",
  });

  createElement("h1", {
    parent: promoSection,
    style: [styles.promoTitle],
    innerHTML: true,
    text: "Казино, которое<br><em>одобрил Тоторо</em>",
  });

  createElement("p", {
    parent: promoSection,
    style: [styles.promoDescription],
    text: "Здесь духи бани раздают бонусы, котобус везёт выплаты, а генератор случайных чисел охраняет сам Камадзи.",
  });

  createElement("p", {
    parent: promoSection,
    style: [styles.promoNote],
    text: "— Первый раз? Лес угощает.",
  });

  const promoBlock = createElement("div", {
    parent: promoSection,
    style: [styles.promoBlock],
  });

  createElement("p", {
    parent: promoBlock,
    style: [styles.promoLabel],
    text: "Приветственный оффер",
  });

  createElement("h2", {
    parent: promoBlock,
    style: [styles.promoOffer],
    text: "Бонус 200% + 150 Фриспинов",
  });

  createElement("p", {
    parent: promoBlock,
    style: [styles.promoOfferSub],
    text: "На первый депозит. Котобус уже выехал.",
  });

  const promoCodeRow = createElement("div", {
    parent: promoBlock,
    style: [styles.promoCodeRow],
  });

  createButton("FOREST500", {
    parent: promoCodeRow,
    func: copyPromo,
    style: ["btn", styles.promoCodeDisplay],
  });

  createButton("Забрать бонус", {
    parent: promoCodeRow,
    type: "a",
    style: ["btn", "btnGold", "btnLarge"],
    attr: {
      href: "#",
    },
  });

  createElement("p", {
    parent: promoBlock,
    style: [styles.promoFine],
    text: "Минимальный депозит: 500 ₽ · Вейджер: x30 · Дух бани одобрил условия",
  });

  const heroCta = createElement("div", {
    parent: promoSection,
    style: [styles.heroCta],
  });

  createButton("Играть сейчас", {
    parent: heroCta,
    style: ["btn", "btnPrimary", "btnLarge"],
    attr: {
      href: "#",
    },
  });

  createButton("Узнать больше", {
    parent: heroCta,
    style: ["btn", "btnOutline"],
    attr: {
      href: "#about",
    },
  });

  const trustBadges = createElement("div", {
    parent: promoSection,
    style: [styles.trustBadges],
  });

  const trustBadgesImages = [
    "/icon-license.svg",
    "/icon-ssl.svg",
    "/icon-clock.svg",
  ];
  const trustBadgesText = [
    "Лицензия Кюрасао",
    "SSL-шифрование",
    "Вывод за 15 минут",
  ];

  for (let i = 0; i < trustBadgesImages.length; i += 1) {
    const badgeItem = createElement("div", {
      parent: trustBadges,
      style: [styles.badgeItem],
    });

    createElement("img", {
      parent: badgeItem,
      style: [styles.badgeIcon],
      attr: {
        src: trustBadgesImages[i],
      },
    });

    createElement("p", {
      parent: badgeItem,
      style: [styles.badgeText],
      text: trustBadgesText[i],
    });
  }

  const toast = createElement("div", {
    parent: document.body,
    style: [styles.toast],
    attr: {
      id: "toast",
    },
    text: "✦ ПРОМОКОД СКОПИРОВАН ✦",
  });

  function copyPromo() {
    const code = "FOREST500"; // хардкод исключительно для тестового задания
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    } else {
      const el = document.createElement("textarea");
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    toast.classList.add(styles.show);
    setTimeout(() => toast.classList.remove(styles.show), 2600);
  }

  return container;
}

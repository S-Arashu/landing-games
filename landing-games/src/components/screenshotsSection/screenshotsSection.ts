import { createButton } from "../../helpers/createButton";
import { createElement } from "../../helpers/createElement";
import styles from "./screenshotsSection.module.css";
import aboutStyles from "../about/About.module.css";

export function screenshotsSection() {
  const screenshotsSection = createElement("section", {
    parent: document.body,
    style: [styles.screenshotsSection],
  });

  const container = createElement("div", {
    parent: screenshotsSection,
    style: ["container"],
  });

  const screenshotsHeader = createElement("div", {
    parent: container,
    style: [styles.screenshotsHeader],
  });

  createElement("p", {
    parent: screenshotsHeader,
    style: [aboutStyles.sectionEyebrow],
    text: "Игры",
  });

  createElement("h2", {
    parent: screenshotsHeader,
    style: [aboutStyles.sectionTitle],
    innerHTML: true,
    text: "Мир, который <em>ждёт тебя</em> внутри",
  });

  createElement("p", {
    parent: screenshotsHeader,
    style: [styles.sectionDesc],
    text: `3 000+ слотов, живые дилеры и покер - всё под присмотром лесных духов`,
  });

  const screenshotGames = createElement("div", {
    parent: container,
    style: [styles.screenshotGames],
  });

  const screenshotCard = createElement("div", {
    parent: screenshotGames,
    style: [styles.screenshotCard, styles.screenshotFeatured],
  });

  createElement("img", {
    parent: screenshotCard,
    style: [styles.screenshotGamesImg],
    attr: {
      src: "/slot-screenshot.svg",
      alt: "Слот Тотальный Лес — Джекпот экран",
      loading: "lazy",
    },
  });

  const screenshotInfo = createElement("div", {
    parent: screenshotCard,
    style: [styles.screenshotInfo],
  });

  const screenshotTitle = createElement("div", {
    parent: screenshotInfo,
    style: [styles.screenshotTitle],
    text: "Тотальный Лес ",
  });

  createElement("span", {
    parent: screenshotTitle,
    style: [styles.badgeTag, styles.new],
    text: "Новинка",
  });

  createElement("div", {
    parent: screenshotInfo,
    style: [styles.screenshotRtp],
    text: "RTP 96.8% · Волатильность: Высокая · Максвин: ×5000",
  });

  const screenshotCardRoulette = createElement("div", {
    parent: screenshotGames,
    style: [styles.screenshotCard],
  });

  createElement("img", {
    parent: screenshotCardRoulette,
    style: [styles.screenshotCardRouletteImg],
    attr: {
      src: "/roulette.png",
      alt: "ЖИВАЯ РУЛЕТКА",
      loading: "lazy",
    },
  });

  const screenshotInfoRoulette = createElement("div", {
    parent: screenshotCardRoulette,
    style: [styles.screenshotInfo],
  });

  createElement("p", {
    parent: screenshotInfoRoulette,
    style: [styles.screenshotTitle],
    text: "Живая Рулетка Духов",
  });

  createElement("p", {
    parent: screenshotInfoRoulette,
    style: [styles.screenshotRtp],
    text: "Дилер: живой · Лимиты: 10 ₽ – 500 000 ₽",
  });

  const bonusCtaBlockGames = createElement("div", {
    parent: container,
    style: [styles.bonusCtaBlock],
  });

  const bonusBadgeWrap = createElement("div", {
    parent: bonusCtaBlockGames,
    style: [styles.bonusBadgeWrap],
  });

  createElement("img", {
    parent: bonusBadgeWrap,
    style: [styles.bonusBadgeWrapImg],
    attr: {
      src: "/bonus-badge.svg",
      alt: "Бонус 200%",
      loading: "lazy",
    },
  });

  const bonusCtaText = createElement("div", {
    parent: bonusCtaBlockGames,
    style: [styles.bonusCtaText],
  });

  createElement("h2", {
    parent: bonusCtaText,
    style: [styles.bonusCtaTextTitle],
    text: "200% бонус. Тоторо одобрил.",
  });

  createElement("p", {
    parent: bonusCtaText,
    style: [styles.bonusCtaTextDesc],
    text: "Котобус с деньгами уже выехал в вашу сторону. Промокод FOREST500 действует прямо сейчас.",
  });

  const bonusButton = createElement("div", {
    parent: bonusCtaBlockGames,
    style: [styles.bonusButton],
  });

  createButton("Получить бонус", {
    parent: bonusButton,
    type: "a",
    style: ["btn", "btnGold", "btnLarge"],
    attr: {
      href: "#offer",
    },
  });

  return screenshotsSection;
}

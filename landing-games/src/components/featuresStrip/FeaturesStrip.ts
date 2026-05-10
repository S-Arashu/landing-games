import { createElement } from "../../helpers/createElement";
import styles from "./FeaturesStrip.module.css";

export function FeaturesStrip() {
  const featuresStrip = createElement("section", {
    parent: document.body,
    style: [styles.featuresStrip],
  });

  const container = createElement("div", {
    parent: featuresStrip,
    style: ["container"],
  });

  const featuresWrapper = createElement("div", {
    parent: container,
    style: [styles.featuresWrapper],
  });

  const icons = ["/icon-license-1.png", "/icon-ssl-1.png", "/icon-clock-1.png"];
  const title = ["Честная игра", "Быстрые выплаты", "Поддержка 24/7"];
  const desc = [
    "Дух-хранитель лично проверяет каждый спин. Тоторо не одобряет жульничество.",
    "Котобус доставляет деньги быстрее, чем Хаул убегает от своих проблем.",
    "Кики всегда спешит на помощь быстрее ветра.",
  ];

  for (let i = 0; i < icons.length; i += 1) {
    const featureItem = createElement("div", {
      parent: featuresWrapper,
      style: [styles.featureItem],
    });

    createElement("img", {
      parent: featureItem,
      style: [styles.featureImg],
      attr: {
        src: icons[i],
        alt: title[i],
      },
    });

    createElement("p", {
      parent: featureItem,
      style: [styles.featureTitle],
      text: title[i],
    });

    createElement("p", {
      parent: featureItem,
      style: [styles.featureDesc],
      text: desc[i],
    });
  }

  return featuresStrip;
}

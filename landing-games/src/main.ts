import { About } from "./components/about/About";
import { FeaturesStrip } from "./components/featuresStrip/FeaturesStrip";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { screenshotsSection } from "./components/screenshotsSection/screenshotsSection";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

app?.append(Header());
app?.append(Hero());
app?.append(FeaturesStrip());
app?.append(About());
app?.append(screenshotsSection());
app?.append(Footer());

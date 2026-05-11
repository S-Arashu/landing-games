import { About } from "./components/about/About";
import { FeaturesStrip } from "./components/featuresStrip/FeaturesStrip";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

app?.append(Header());
app?.append(Hero());
app?.append(FeaturesStrip());
app?.append(About());

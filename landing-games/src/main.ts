import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

app?.append(Header());
app?.append(Hero());

import { Header } from "./components/header/header";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

app?.append(Header());

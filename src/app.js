/* Imports */
import { EntriesScreen } from "./screens/EntriesScreen";
import "./styles/style.css";

const router = async () => {
	const main = document.querySelector("#app-router");
	main.innerHTML = await EntriesScreen.render();
};

window.addEventListener("load", router);

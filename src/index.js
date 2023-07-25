import { createBaseHTML } from "./dom-creation";
import './css/style.css';
import { getLocalStorage } from "./localstorage";
import { setProjects } from "./project";

setProjects(getLocalStorage());
createBaseHTML();

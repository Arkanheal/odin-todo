import Todo from "./todo";
import { createBaseHTML } from "./dom-creation";
import './css/style.css';

let x = new Todo("test", "test desc", new Date(), "MEDIUM", "NOT STARTED");

createBaseHTML();

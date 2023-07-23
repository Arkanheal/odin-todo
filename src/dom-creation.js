export function createBaseHTML() {
  const body = document.querySelector("body");

  body.appendChild(createHeader());
  body.appendChild(createMain());
  body.appendChild(createFooter());
}

function createHeader() {
  const headerTag = document.createElement("header");
  headerTag.textContent = "Odin TODO List";

  return headerTag;
}

function createMain() {
  const mainTag = document.createElement("main");

  mainTag.appendChild(createNav());
  mainTag.appendChild(createContent());

  return mainTag;
}

function createFooter() {
  const footerTag = document.createElement("footer");
  const currentYear = new Date().getFullYear();
  footerTag.textContent = `Trademark or something - ${currentYear}`;

  return footerTag;
}

function createNav() {
  const navTag = document.createElement("nav");

  const navHeader = document.createElement("h1");
  navHeader.textContent = "Projects";

  navTag.appendChild(navHeader);

  return navTag;
}

function createContent() {
  const contentDiv = document.createElement("div");
  contentDiv.id = "wrapper";

  const navHeader = document.createElement("h1");
  navHeader.textContent = "Projects";

  contentDiv.appendChild(navHeader);

  return contentDiv;
}

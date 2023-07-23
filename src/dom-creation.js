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

  const projectWrapperDiv = document.createElement("div");
  projectWrapperDiv.id  = "project-wrapper";
  navTag.appendChild(projectWrapperDiv);

  projectWrapperDiv.appendChild(createAddProjectButton());

  return navTag;
}

function createContent() {
  const contentDiv = document.createElement("div");
  contentDiv.id = "wrapper";

  const contentHeader = document.createElement("h1");
  contentHeader.id = "content-header";
  contentHeader.textContent = "Projects";
  contentDiv.appendChild(contentHeader);

  const tasksWrapperDiv = document.createElement("div");
  tasksWrapperDiv.id  = "tasks-wrapper";

  tasksWrapperDiv.appendChild(createAddTaskButton());

  contentDiv.appendChild(tasksWrapperDiv);

  return contentDiv;
}

function createAddTaskButton() {
  const addTaskBtn = document.createElement("div");
  addTaskBtn.id = "add-task";

  const iconSpan = document.createElement("span");
  iconSpan.textContent = "➕";
  iconSpan.id = ("add-task-icon");
  addTaskBtn.appendChild(iconSpan);

  const textSpan = document.createElement("span");
  textSpan.id = "add-task-text";
  textSpan.textContent = "Add Task";
  addTaskBtn.appendChild(textSpan);

  return addTaskBtn;
}

function createAddProjectButton() {
  const addProjectBtn = document.createElement("div");
  addProjectBtn.id = "add-project";

  const iconSpan = document.createElement("span");
  iconSpan.textContent = "➕";
  iconSpan.id = ("add-project-icon");
  addProjectBtn.appendChild(iconSpan);

  const textSpan = document.createElement("span");
  textSpan.id = "add-project-text";
  textSpan.textContent = "Add Project";
  addProjectBtn.appendChild(textSpan);

  return addProjectBtn;
}

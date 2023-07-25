import { createBaseHTML, createNav, updateContent } from "./dom-creation";
import Project, { projects } from "./project";
import Todo from "./todo";

export function displayForm(type) {
  const btnDiv = document.querySelector(`#add-${type}`);
  btnDiv.style.display = "none";

  const formDiv = document.querySelector(`#add-${type}-form`);
  formDiv.style.display = "block";
}

export function displayBtn(type) {
  const btnDiv = document.querySelector(`#add-${type}`);
  btnDiv.style.display = "block";

  const formDiv = document.querySelector(`#add-${type}-form`);
  formDiv.style.display = "none";
}

export function addTask(name) {
  const newTask = new Todo(name, "", "", "LOW");
  const currentProjectName = getSelectedProject();
  if (currentProjectName !== "All Projects") {
    projects["All Projects"].addTodo(newTask);
  }
  const currentProject = projects[getSelectedProject()];
  currentProject.addTodo(newTask);

  updateContent();
  displayBtn("task");
}

export function addProjects(name) {
  if (Object.keys(projects).includes(name)) {
    return;
  }
  projects[name] = new Project(name);
  createBaseHTML();
  displayBtn("project");
}

function updateContentHeader(projectName) {
  const projectHeader = document.querySelector("#content-header");
  projectHeader.textContent = projectName;
}

export function displayProjects() {
  const projectDivs = [];
  Object.keys(projects).forEach(element => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    if (projects[element].selected) {
      projectDiv.classList.add("selected");
    }
    projectDiv.textContent = element;

    projectDiv.onclick = projectOnClick;
    projectDivs.push(projectDiv);
  });
  return projectDivs;
}

export function displayTodos(projectName) {
  const projectObj = projects[projectName];
  const allProjects = projects["All Projects"];

  const todoDivs = [];

  for (let todo of projectObj.todos) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const iconSpan = document.createElement("span");
    iconSpan.textContent = "ο";
    iconSpan.id = ("add-task-icon");
    taskDiv.appendChild(iconSpan);
    iconSpan.onclick = (e) => {
      e.target.parentNode.remove();
      if (projectName !== "All Projects") {
        projectObj.removeTodo(todo.title);
      }
      allProjects.removeTodo(todo.title);
    };

    const textSpan = document.createElement("span");
    textSpan.id = "add-task-text";
    textSpan.textContent = todo.title;
    taskDiv.appendChild(textSpan);

    todoDivs.push(taskDiv);
  }
  return todoDivs;
}

export function getSelectedProject() {
  for (let name in projects) {
    if (projects[name].selected)
      return name;
  }
}

function projectOnClick(e) {
  const projectName = e.target.textContent;
  updateContentHeader(projectName);
  Array.from(e.target.parentNode.children).forEach(element => {
    element.classList.remove("selected");
  });

  projects[getSelectedProject()].selected = false;
  projects[projectName].selected = true;
  e.target.classList.add("selected");

  updateContent();
}

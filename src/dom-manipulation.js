import { createBaseHTML, updateContent } from "./dom-creation";
import { setLocalStorage } from "./localstorage";
import { addProject, getProject, getProjects, getSelected, removeProject } from "./project";
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
  const currentProjectName = getSelected();
  if (currentProjectName !== "All Projects") {
    getProject("All Projects").addTodo(newTask);
  }
  const currentProject = getProject(getSelected());
  currentProject.addTodo(newTask);

  setLocalStorage();
  updateContent();
  displayBtn("task");
}

export function addProjects(name) {
  addProject(name);
  createBaseHTML();
  displayBtn("project");
}

function updateContentHeader(projectName) {
  const projectHeader = document.querySelector("#content-header");
  projectHeader.textContent = projectName;
}

export function displayProjects() {
  const projectDivs = [];
  Object.keys(getProjects()).forEach(element => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    if (getProject(element).selected) {
      projectDiv.classList.add("selected");
    }

    if (element !== "All Projects") {
      const iconSpan = document.createElement("span");
      iconSpan.textContent = "ο";
      iconSpan.classList.add("project-icon");
      projectDiv.appendChild(iconSpan);
      iconSpan.onclick = (e) => {
        const parent = e.target.parentNode;
        removeProject(parent.lastChild.textContent);
        parent.remove();
        getProject("All Projects").selected = true;
        updateContent();
      };
    }

    const textSpan = document.createElement("span");
    textSpan.classList.add("project-text");
    textSpan.textContent = element;
    textSpan.onclick = projectOnClick;
    projectDiv.appendChild(textSpan);

    projectDivs.push(projectDiv);
  });
  return projectDivs;
}

export function displayTodos(projectName) {
  const projectObj = getProject(projectName);
  const allProjects = getProject("All Projects");

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
      setLocalStorage();
    };

    const textSpan = document.createElement("span");
    textSpan.id = "add-task-text";
    textSpan.textContent = todo.title;
    taskDiv.appendChild(textSpan);

    todoDivs.push(taskDiv);
  }
  return todoDivs;
}

function projectOnClick(e) {
  const projectName = e.target.textContent;
  updateContentHeader(projectName);
  Array.from(e.target.parentNode.children).forEach(element => {
    element.classList.remove("selected");
  });

  getProject(getSelected()).selected = false;
  getProject(projectName).selected = true;
  e.target.classList.add("selected");

  setLocalStorage();
  updateContent();
}

import Project, { getProjects } from "./project";
import Todo from "./todo";

export function setLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(getProjects()));
}

export function getLocalStorage() {
  const test = {};
  const localJSON = JSON.parse(localStorage.getItem("projects"));

  for (const key in localJSON) {
    const project = localJSON[key];
    const projObj = new Project(project.name, project.selected);

    for (const todo of project.todos) {
      projObj.todos.push(new Todo(todo.title));
    }
    test[key] = projObj;
  }

  return test;
}

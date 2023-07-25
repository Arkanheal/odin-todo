export default class Project {

  constructor(name, selected) {
    this.name = name;
    this.todos = [];
    this.selected = selected;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(title) {
    this.todos = this.todos.filter(t => t.title !== title);
  }
};

let projects = { "All Projects": new Project("All Projects", true) };

export function addProject(name) {
  if (projects[name]) {
    return;
  }
  projects[name] = new Project(name, false);
  setLocalStorage();
}

export function removeProject(name) {
  delete projects(name);
  setLocalStorage();
}

export function getProject(name) {
  return projects[name];
}

export function setProjects(jsonProjects) {
  console.log(jsonProjects);
  projects = jsonProjects;
}

export function getProjects() {
  return projects;
}

export function getSelected() {
  for (let name in projects) {
    if (projects[name].selected)
      return name;
  }
}

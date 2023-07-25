export default class Project {
  #name;
  #todos;

  constructor(name) {
    this.#name = name;
    this.#todos = [];
  }

  set name(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get todos() {
    return this.#todos;
  }

  addTodo(todo) {
    this.#todos.push(todo);
  }
}

export let projects = {"All Projects": new Project("All Projects")};

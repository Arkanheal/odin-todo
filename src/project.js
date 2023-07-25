export default class Project {
  #name;
  #todos;
  #selected

  constructor(name, selected) {
    this.#name = name;
    this.#todos = [];
    this.#selected = selected;
  }

  set name(name) {
    this.#name = name;
  }

  set selected(selected) {
    this.#selected = selected;
  }

  get name() {
    return this.#name;
  }

  get selected() {
    return this.#selected;
  }

  get todos() {
    return this.#todos;
  }

  addTodo(todo) {
    this.#todos.push(todo);
  }

  removeTodo(title) {
    this.#todos = this.#todos.filter(t => t.title !== title);
  }
}

export let projects = {"All Projects": new Project("All Projects", true)};

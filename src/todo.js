export default class Todo {
  #title;
  #description;
  #dueDate;
  #priority;
  #project;

  constructor(title, description, dueDate, priority, project) {
    if (!priorities.includes(priority.toUpperCase())) {
      throw new Error("Invalid priority value.");
    }

    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#project = project;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get project() {
    return this.#project;
  }

  set title(title) {
    this.#title = title;
  }

  set description(description) {
    this.#description = description;
  }

  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  set priority(priority) {
    if (!priorities.includes(priority.toUpperCase())) {
      throw new Error("Invalid Priority value.");
    }
    this.#priority = priority;
  }
}

const priorities = ["LOW", "MEDIUM", "HIGH"];


export default class Todo {

  #title;
  #description;
  #dueDate;
  #priority;
  #completionStatus;

  constructor(title, description, dueDate, priority, completionStatus) {
    if (!completionStatuses.includes(completionStatus.toUpperCase())) {
      throw new Error("Invalid Completion Status.");
    }
    if (!priorities.includes(priority.toUpperCase())) {
      throw new Error("Invalid priority value.");
    }

    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#completionStatus = completionStatus;
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

  get completionStatus() {
    return this.#completionStatus;
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

  set completionStatus(completionStatus) {
    if (!completionStatuses.includes(completionStatus.toUpperCase())) {
      throw new Error("Invalid Completion Status.");
    }
    this.#completionStatus = completionStatus;
  }

}

const completionStatuses = ["NOT STARTED", "IN PROGRESS", "DONE"];
const priorities = ["LOW", "MEDIUM", "HIGH"];

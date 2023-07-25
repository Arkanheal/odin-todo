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

export let projects = {"All Projects": new Project("All Projects", true)};

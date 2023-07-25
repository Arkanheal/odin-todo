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
  const taskWrapperDiv = document.querySelector("#tasks-wrapper");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const iconSpan = document.createElement("span");
  iconSpan.textContent = "ο";
  iconSpan.id = ("add-task-icon");
  taskDiv.appendChild(iconSpan);
  iconSpan.onclick = (e) => {
    e.target.parentNode.remove();
  };

  const textSpan = document.createElement("span");
  textSpan.id = "add-task-text";
  textSpan.textContent = name;
  taskDiv.appendChild(textSpan);

  taskWrapperDiv.prepend(taskDiv);

  displayBtn("task");
}

export function addProjects(name) {
  const projectWrapperDiv = document.querySelector("#projects-wrapper");

  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  projectDiv.textContent = name;

  projectDiv.onclick = (e) => {
    updateContentHeader(e.target.textContent);
    console.log(projectWrapperDiv.children);
    Array.from(projectWrapperDiv.children).forEach(element => {
      element.classList.remove("selected");
    });
    e.target.classList.add("selected");
  }

  projectWrapperDiv.prepend(projectDiv);

  displayBtn("project");
}

function updateContentHeader(projectName) {
  const projectHeader = document.querySelector("#content-header");
  projectHeader.textContent = projectName;
}

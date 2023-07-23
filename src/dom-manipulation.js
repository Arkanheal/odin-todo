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

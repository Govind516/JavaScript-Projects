const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") alert("Please Write Some Task !!");
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
  inputBox.value = "";
  saveDate();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") e.target.classList.toggle("checked");
    else if (e.target.tagName === "SPAN") e.target.parentElement.remove();
    saveDate();
  },
  false
);

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();

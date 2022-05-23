const title = document.getElementById("title");
const Descr = document.getElementById("descr");
const Container = document.querySelector(".container");
const form = document.querySelector("form");

let tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const allTask = () => {
  tasks.forEach((item, index) => {
    let HtmlData = `
    <div class="task-info">
    <p>${item.title}</p>
      <span>${item.Descr}</span>
  </div>
  <button class="btn" id="del">Delete</button>
      `;

    let Tasks = document.createElement("div");
    Tasks.classList.add("tasks");
    Tasks.insertAdjacentHTML("afterbegin", HtmlData);
    Container.appendChild(Tasks);

    const Del = Tasks.querySelector("#del");

    Del.addEventListener("click", () => {
      removeTask();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      allTask();
    });
  });
};

const removeTask = () => {
  tasks.forEach(() => {
    let div = document.querySelector(".tasks");
    div.remove();
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTask();
  tasks.push({
    title: title.value,
    Descr: Descr.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  allTask();
  title.value = '';
  Descr.value = '';
});

allTask();

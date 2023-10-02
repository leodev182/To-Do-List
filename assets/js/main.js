// ---------------------------------------------------------------------------------------DOM ELEMENTS
const inputTask = document.querySelector("#task-input");
const btnAddTasks = document.querySelector("#add-task");
const totalTasks = document.querySelector("#total-tasks");
const completedTasks = document.querySelector("#completed-tasks");
const taskList = document.querySelector("tbody");
const showList = document.querySelector(".show");

// ---------------------------------------------------------------------------------------ARRAYS
const tasks = [];
// console.log();

// ---------------------------------------------------------------------------------------FUNCTIONS

const addTask = function () {
  // create id ramdon
  const id = Math.floor(Math.random() * 999);
  // create objects for task
  const assignment = {
    id,
    activity: inputTask.value,
    status: false,
  };
  // add objects to task's array
  tasks.push(assignment);
  renderList();
  // cleaning input
  inputTask.value = "";
  // console.table(assignment);
};

const renderList = () => {
  let count = 0;
  let html = "";
  for (let task of tasks) {
    html += ` <tr>
    <td>${task.id}</td>
    <td id="info">${task.activity}</td>
    <td><input type="checkbox" onClick="checkboxId(${task.id}, this ${
      task.status ? "checked" : ""
    })";/>
    </td>
    <td><button onClick="deleteTask(${
      task.id
    })" style=" font-weight: bolder; font-size: medium; border: none; color: red;">
    X</button></td>
    </tr>
    `;
    count++;
  }
  taskList.innerHTML = html;
  // console.log(tasks);
  totalTasks.innerHTML = tasks.length;
  completedTasks.innerHTML = successfullTask();
};

const deleteTask = (id) => {
  const indexTask = tasks.findIndex((task) => task.id == id);
  // console.log(indexTask);
  tasks.splice(indexTask, 1);
  renderList();
};

const successfullTask = () => {
  const filtStatus = tasks.filter((task) => task.status == true);
  return filtStatus.length;
};

const checkboxId = (id, check) => {
  const findCheck = tasks.findIndex((task) => task.id == id);
  tasks[findCheck].status = check.checked;
  completedTasks.innerHTML = successfullTask();
};

// ---------------------------------------------------------------------------------------EVENTS
btnAddTasks.addEventListener("click", () => {
  addTask();
});

document.addEventListener("DOMContentLoaded", renderList());

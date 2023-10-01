// ---------------------------------------------------------------------------------------DOM ELEMENTS
const inputTask = document.querySelector("#task-input");
const btnAddTasks = document.querySelector("#add-task");
// const checkIn = document.querySelector("#check");
const activityDone = document.querySelector("#info");
const totalTasks = document.querySelector("#total-tasks");
const completedTasks = document.querySelector("#completed-tasks");
const taskList = document.querySelector("tbody");

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
    <td><input type="checkbox" value="approved" id="check" onClick="checkboxId(${task.id})";/>
    </td>
    <td><button onClick="deleteTask(${task.id})" style=" font-weight: bolder; font-size: medium; border: none; color: red;">
    X</button></td>
    </tr>
    `;
    count++;
  }
  taskList.innerHTML = html;
  // console.log(tasks);
  totalTasks.innerHTML = tasks.length;
  completedTasks.innerHTML = tasks.check;
};

const deleteTask = (id) => {
  const indexTask = tasks.findIndex((task) => task.id == id);
  // console.log(indexTask);
  tasks.splice(indexTask, 1);
  renderList();
};

const checkboxId = () => {
  // document.querySelector("#check").checked == true
  //   ? console.log(findCheck)
  //   : console.log("No funciona");

  console.log(indexTask);
  renderList;
};

// ---------------------------------------------------------------------------------------EVENTS
btnAddTasks.addEventListener("click", () => {
  addTask();
});

document.addEventListener("DOMContentLoaded", renderList());

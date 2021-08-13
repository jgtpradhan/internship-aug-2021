import { addTodos, markComplete, deleteTodo } from "./modules/actions.js";
const todoInput = document.getElementById("todo-input");
const addTodo = document.querySelector(".addTodo");
const ul = document.querySelector("ul");
const clearAll = document.querySelector(".clear-all");

let todo = "";
const m = moment("2021-08-13 10:37", "YYYY-MM-DD hh:mm");
console.log(m.fromNow());

// Assigning value to todo
todoInput.addEventListener("input", (e) => {
  todo = e.target.value;
});

addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(date.value);
  addTodos(todo);
});

// Delete and Set Complete Item
ul.addEventListener("click", (e) => {
  deleteTodo(e);
  markComplete(e);
});

// Clear All todos
clearAll.addEventListener("click", () => {
  ul.innerHTML = "";
});

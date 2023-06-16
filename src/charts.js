import { formatDate, addData } from "./utils.js";
import { config } from "./data.js";

const ctx = document.getElementById("chart1");
const ctx2 = document.getElementById("chart2");

let chart1 = new Chart(ctx, config);
let chart2 = new Chart(ctx2, config);

let form = document.getElementById("data-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let exercise = document.getElementById("exercise").value;
  let weight = document.getElementById("weight").value;
  let reps = document.getElementById("reps").value;
  let date = document.getElementById("date").value;
  addData(chart1, formatDate(date), reps, weight);
});

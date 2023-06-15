import { formatDate } from "./utils.js";
import { dateLabels, config } from "./data.js";

let form = document.getElementById("data-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let exercise = document.getElementById("exercise");
  let weight = document.getElementById("weight");
  let reps = document.getElementById("reps");
  let date = document.getElementById("date");
  console.log(exercise.value, weight.value, reps.value, formatDate(date.value));
});
const ctx = document.getElementById("chart1");
const ctx2 = document.getElementById("chart2");

new Chart(ctx, config);
new Chart(ctx2, config);

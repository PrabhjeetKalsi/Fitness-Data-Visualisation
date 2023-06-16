export function formatDate(date) {
  const dateParts = date.split("-");
  const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function addData(chart, date, reps, weight) {
  chart.data.labels.push(date);
  chart.data.datasets[0].data.push(reps);
  chart.data.datasets[1].data.push(weight);
  chart.update();
}

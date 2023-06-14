const ctx = document.getElementById("chart1");
const ctx2 = document.getElementById("chart2");
const config = {
  type: "line",
  data: {
    labels: ["10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun", "15 Jun"],
    datasets: [
      {
        yAxisID: "left",
        label: "# of Reps",
        data: [6, 7, 7, 8, 10, 11],
        borderWidth: 1,
      },
      {
        yAxisID: "right",
        label: "Weight",
        data: [70, 85, 100, 100, 130, 130],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        text: "Leg Press",
        align: "center",
        display: true,
        font: {
          weight: "bold",
          size: 30,
        },
      },
    },
    tension: 0.3,
    scales: {
      x: {
        title: {
          text: "Date",
          display: true,
          font: { size: 20, weight: "bold" },
        },
      },
      left: {
        title: {
          text: "Repititions",
          display: true,
          font: { size: 20, weight: "bold" },
        },
        beginAtZero: true,
      },
      right: {
        position: "right",
        title: {
          text: "Weight",
          display: true,
          font: { size: 20, weight: "bold" },
        },
        beginAtZero: true,
      },
    },
  },
};
new Chart(ctx, config);
new Chart(ctx2, config);

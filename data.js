//Intial Mock Data
let dateLabels = [
  "Jun 10, 2023",
  "Jun 11, 2023",
  "Jun 12, 2023",
  "Jun 13, 2023",
  "Jun 14, 2023",
  "Jun 15, 2023",
];
let legPressReps = [6, 7, 7, 8, 10, 11];
let legPressWeight = [70, 85, 100, 100, 130, 130];

export let config = {
  type: "line",
  data: {
    labels: dateLabels,
    datasets: [
      {
        yAxisID: "left",
        label: "# of Reps",
        data: legPressReps,
        borderWidth: 1,
      },
      {
        yAxisID: "right",
        label: "Weight",
        data: legPressWeight,
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

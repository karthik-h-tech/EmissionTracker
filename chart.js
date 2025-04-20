let chart;

function updateChart(city, level) {
  const ctx = document.getElementById("methaneChart").getContext("2d");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [city],
      datasets: [{
        label: "Methane Level (ppm)",
        data: [level.toFixed(2)],
        backgroundColor: level > 6 ? "red" : "green",
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 10
        }
      }
    }
  });
}

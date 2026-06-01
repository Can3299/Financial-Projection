function updateChart(labels, data) {
  const ctx = document.getElementById('growthChart').getContext('2d');
  const isDark = document.documentElement.classList.contains('dark');
  const color = isDark ? '#818cf8' : '#2563eb';

  if (window.myChart) window.myChart.destroy();

  window.myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Balance ($)',
        data: data,
        borderColor: color,
        backgroundColor: isDark ? 'rgba(129, 140, 248, 0.2)' : 'rgba(37, 99, 235, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: color
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (context) {
              return '$' + parseFloat(context.raw).toLocaleString('en-US', { minimumFractionDigits: 2 });
            }
          }
        }
      },
      scales: {
        y: {
          grid: { color: isDark ? '#334155' : '#f1f5f9' },
          ticks: {
            color: isDark ? '#94a3b8' : '#64748b',
            callback: function (value) { return '$' + value; }
          }
        },
        x: {
          grid: { display: false },
          ticks: { color: isDark ? '#94a3b8' : '#64748b' }
        }
      }
    }
  });
}

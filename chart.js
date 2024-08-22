const ctx = document.getElementById('searchChart').getContext('2d');

// Customize this data to match your search terms and years
const searchData = {
    labels: [], // X-axis labels (years)
    datasets: [
        {
            label: 'Search Term 1',
            data: [], // Y-axis data (search counts)
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1, // Smooth curve
        },
        {
            label: 'Search Term 2',
            data: [], // Y-axis data (search counts)
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1,
        }
    ]
};

const config = {
    type: 'line',
    data: searchData,
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                    beginAtZero: true,
                }
            },
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 2000, // Animation duration in ms
            easing: 'easeOutQuart', // Animation easing
            loop: false,
            onProgress: function(animation) {
                const chartInstance = animation.chart;
                const ctx = chartInstance.ctx;
                ctx.clearRect(0, 0, chartInstance.width, chartInstance.height);
            }
        }
    }
};

// Function to update chart data dynamically
function updateChartData(chart, labels, data1, data2) {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data1;
    chart.data.datasets[1].data = data2;
    chart.update();
}

const searchChart = new Chart(ctx, config);

// Example: update chart data
setTimeout(() => {
    updateChartData(searchChart, [2000, 2001, 2002, 2003, 2004, 2005], [100, 150, 200, 250, 300, 350], [80, 120, 180, 220, 260, 320]);
}, 500);

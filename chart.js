// Select the canvas element in the HTML where the chart will be rendered
const ctx = document.getElementById('searchChart').getContext('2d');

// Sample data for Google search trends (you can replace this with your own data)
const searchData = {
    labels: [2000, 2001, 2002, 2003, 2004, 2005],
    datasets: [
        {
            label: 'Search Term 1',
            data: [100, 150, 200, 250, 300, 350],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1, // Smoothing of the line
        },
        {
            label: 'Search Term 2',
            data: [80, 120, 180, 220, 260, 320],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1, // Smoothing of the line
        }
    ]
};

// Configuration for the chart
const config = {
    type: 'line', // Line chart type
    data: searchData,
    options: {
        scales: {
            x: {
                type: 'linear', // X-axis as linear scale
                position: 'bottom', // X-axis position
            },
            y: {
                beginAtZero: true, // Y-axis starts at zero
            }
        },
        animation: {
            duration: 2000, // Animation duration in milliseconds
            easing: 'easeOutBounce', // Animation easing style
        }
    }
};

// Render the chart using Chart.js
new Chart(ctx, config);

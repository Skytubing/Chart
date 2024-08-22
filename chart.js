<!DOCTYPE html>
const ctx = document.getElementById('testChart').getContext('2d');

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
            duration: 5000, // Animation duration in milliseconds
            easing: 'easeInOutCubic', // Animation easing style
        }
    }
};

let myChart = new Chart(ctx, config); // Create the chart instance

// Play/Pause Button Functionality
let isPlaying = false;
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        myChart.options.animation.duration = 0; // Stop the animation
        playPauseBtn.textContent = 'Play';
    } else {
        myChart.options.animation.duration = 5000; // Resume the animation
        myChart.update(); // Trigger the update to restart animation
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

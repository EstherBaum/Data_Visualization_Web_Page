
document.addEventListener('DOMContentLoaded', function () {
    const bubbleplot = document.getElementById('bubble_chart');

        // Fetch data from Flask API
        fetch('/get_bubble_data')
        .then(response => response.json());


            // bubble chart plot trace and layout
            const trace = {
                x: data.x_bubble,
                y: data.y_bubble,
                mode: 'markers',
                type: 'bubble',
                marker: { size: data.size_bubble }
            };

            const layout = {
                title: `Bubble Chart`
            };

            Plotly.newPlot('bubble_chart', [trace], layout);
        })
        // Log errors to the console
        .catch(error => {
            console.error('Error:', error); 
        });
    }

    // Initialize the scatter plot with the default selected value
    updateBubblePlot();
});
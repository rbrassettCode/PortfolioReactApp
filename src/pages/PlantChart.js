import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './PlantChart.css'

function PlantChart({ data }) {
  console.log(data);
  const timeLabels = data.map(d => new Date(d.time).toLocaleString());
  const moistureData = data.map(d => d.moisture);
  //const temperatureData = data.map(d => d.temperature);
  //const wateredData = data.map(d => d.watered ? d.temperature : null); // Assuming we overlay watering event on temperature for visualization

  const chartData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Moisture',
        data: moistureData,
        borderColor: 'blue',
        yAxisID: 'y-axis-moisture',
      },
    ],
  };

  const options = {
    scales: {
      'y-axis-moisture': {
        type: 'linear',
        position: 'left',
      },
    },
  };

  return <Line className='chart-box' data={chartData} options={options} />;
}

export default PlantChart;
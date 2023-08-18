import React from "react";
import Chart from 'chart.js';


const ctx = document.getElementById('chart_id').getContext('2d');
const BarResult = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'],
          datasets: [{
              label: 'Different colors bars',
              data: [90, 100, 80, 50, 70],
              backgroundColor: ["#ed1e1e", "#2269e5", "#fce302", "#04f759", "#fc9700"]
          }]
      }
  });
export default BarResult;
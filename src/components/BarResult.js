import React, { useEffect, useRef } from "react";
import { Chart } from 'chart.js';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      new Chart(ctx, {
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
    }
  }, []);

  return <canvas id="chart_id" ref={chartRef}></canvas>;
}

export default BarChart;

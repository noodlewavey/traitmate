import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { useTheme } from "@mui/material";
import { PersonalityScoreProvider, usePersonality } from "./PersonalityScoreProvider";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChart = ({ width, height, personality }) => {
  const theme = useTheme();

  const {personalityScore,  setPersonalityScore} = usePersonality();
  //didn't add personalityScore here...

  const data = {
    labels: [
      "Extraversion",
      "Agreeableness",
      "Conscientiousness",
      "Emotional Stability",
      "Intellect",
    ],
    datasets: [
      {
        labels: [3, 12, 4, 5, 2],
        data: Object.values(personalityScore),
        backgroundColor: ["red", "green", "blue", "purple", "orange"],
        borderColor: "black",
      },
    ],
  };

  const options = {
    indexAxis: "y", //this makes the chart horizontal
    plugins: {
      tooltip: {
        callbacks: {
          label: context => {
            return {
              font: {
                family: theme.typography.body2.fontFamily,
              },
            };
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: theme.typography.body2.fontFamily,
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: theme.typography.body2.fontFamily,
          },
        },
      },
    },
    maintainAspectRatio: false,
    // according to documentation, we need to set aspectratio to false for barchart to be resized
  };


 

  return (
    <div style={{ height: `${height}rem`, width: `${width}rem` }}>
      {/* we resize the bar chart via div wrapping it */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

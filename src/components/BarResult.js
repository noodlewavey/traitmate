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
  //this was my issue for why it was null!!!
  //remember to initialize all contexts

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
        data: [
          personality.extraversion,
          personality.agreeableness,
          personality.conscientiousness,
          personality.emotionalStability,
          personality.intellect,
        ],
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
        min: 0,
        max: 50
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

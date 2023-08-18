import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarResult({width, height}) {
  return (
    <BarChart
  xAxis={[
    {
      id: 'Big 5 categories',
      data: ['Extraversion', 'Agreeableness', 'Conscientiousness', 'Emotional Stability', 'Intellect' ],
      scaleType: 'band',
    },
  ]}
  series={[
    {
      data: [12, 4, 5, 19, 20],
    },
  ]}
  width={width}
  height={height}
/>
  );
}

//i get a bug when i put only one value inside each data
//like data: [4] 


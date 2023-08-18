import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarResult({width, height}) {
  return (
    <BarChart
    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
    width={width}
    height={height}
  />
  );
}

//i get a bug when i put only one value inside each data
//like data: [4] 


import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from '@material-ui/core/Card';
import './../App.css';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

const data = [
  {
    name: 'Page A', uv: 400, pv: 300, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 300, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 200, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 220, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 330, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 150, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 100, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
    
        <Card  className="card-third-style">
  <div className="text">
      Visits
  </div>
  <div className="num">
    882
  </div>

  <div className="text">
  <TrendingDownIcon style={{color:"red" }}/> -9% of Target
  </div>
          
        {/* <div className="chart-style"> */}
      <BarChart
        width={330}
        height={150}
        data={data}
        style={{width:"100%"}}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        className="chart-style"
      >
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="Red" />
        {/* <Bar dataKey="uv" fill="#00f3ff" /> */}
      </BarChart>
      {/* </div> */}
      </Card>
      

    );
  }
}
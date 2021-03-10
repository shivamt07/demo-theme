import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from '@material-ui/core/Card';
import './../App.css';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const data = [
  {
    name: 'Page A', uv: 400, pv: 300, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 900, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 980, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 700, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 500, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
    
        <Card  className="card-style">
  <div className="text">
      Conversion
  </div>
  <div className="num">
      492
  </div>

  <div className="text">
  <TrendingUpIcon style={{color:"#0ee50e" }}/> 13% of Target
  </div>
          
        {/* <div className="chart-style"> */}
      <BarChart
        width={330}
        height={150}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        className="chart-style"
      >
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#00f3ff" />
        {/* <Bar dataKey="uv" fill="#00f3ff" /> */}
      </BarChart>
      {/* </div> */}
      </Card>
      

    );
  }
}
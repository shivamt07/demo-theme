import React, {Component } from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
  } from 'recharts';

// const { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } = Recharts;

const data = [
      { name: 'JAN', uv: 3900, pv: 400, amt: 2400 },
      { name: 'FEB', uv: 2500, pv: 298, amt: 2210 },
      { name: 'MAR', uv: 3800, pv: 300, amt: 2290 },
      { name: 'APR', uv: 4100, pv: 308, amt: 2000 },
      { name: 'MAY', uv: 1900, pv: 400, amt: 2181 },
      { name: 'JUN', uv: 3000, pv: 300, amt: 2500 },
      { name: 'JUL', uv: 3800, pv: 400, amt: 2100 },
      { name: 'AUG', uv: 3200, pv: 200, amt: 2400 },
      { name: 'SEP', uv: 2900, pv: 198, amt: 2210 },
      { name: 'OCT', uv: 3400, pv: 200, amt: 2290 },
      { name: 'NOV', uv: 2200, pv: 308, amt: 2000 },
      { name: 'DEC', uv: 2900, pv: 200, amt: 2181 },
];

export default class Example extends Component{
    render () {
      return (
        <Card  className="card-middle-style">
         
             <Typography paragraph>
       visitors & pages views
        </Typography>
        {/* <div className="middle-text">
        <div paragraph>
       Yesterday
        </div>
        <div paragraph>
     Today
        </div>
        </div> */}
        <AreaChart
          width={1150}
          height={400}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name" className= "x-axis" />
           <YAxis />
           <Tooltip />
           <Area
             type='monotone'
             dataKey='uv'
             stroke='#8884d8'
             fill='#00f3ff'
           />
              <Area
             type='monotone'
             dataKey='pv'
             stroke='#8884d8'
             fill='#000207'
           />
         </AreaChart>
         </Card>
       );
     }
   }


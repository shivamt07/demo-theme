import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';


import {
    AreaChart, Area, XAxis, 
    // YAxis, CartesianGrid,
     Tooltip
} from 'recharts';

// const { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } = Recharts;

const data = [
    { name: 'JAN', uv: 3900, pv: 2400, amt: 2400 },
    { name: 'FEB', uv: 2500, pv: 1398, amt: 2210 },
    { name: 'MAR', uv: 3800, pv: 9800, amt: 2290 },
    { name: 'APR', uv: 4100, pv: 3908, amt: 2000 },
    { name: 'MAY', uv: 1900, pv: 4800, amt: 2181 },
    { name: 'JUN', uv: 3000, pv: 3800, amt: 2500 },
    { name: 'JUL', uv: 3800, pv: 4300, amt: 2100 },
    { name: 'AUG', uv: 3200, pv: 2400, amt: 2400 },
    { name: 'SEP', uv: 2900, pv: 1398, amt: 2210 },
    { name: 'OCT', uv: 3400, pv: 9800, amt: 2290 },
    { name: 'NOV', uv: 2200, pv: 3908, amt: 2000 },
    { name: 'DEC', uv: 2900, pv: 4800, amt: 2181 },
];

export default class Example extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#172836', marginLeft: '-23px', padding: '30px' }}>
                <Typography paragraph style={{ color: 'white' }}>
                    Visitors
              </Typography>
                <div className="area-text" paragraph paragraph >
                    Unique visitors by month
              </div>
                <AreaChart
                    id="area"
                    // style={{}}
                    width={1540}
                    height={300}
                    data={data}
                    margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
                    style={{ backgroundColor: '#172836' ,width:"100%" }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" className="x-axis" />
                    {/* <YAxis /> */}
                    <Tooltip />
                    <Area
                        dataKey='uv'
                        stroke='#8884d8'
                        fill='#6BDAFA'
                    />
                </AreaChart>
            </div>

        );
    }
}


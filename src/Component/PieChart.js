import React, { PureComponent } from 'react';
// import PieChart from '@bit/recharts.recharts.pie-chart';
import { PieChart, Pie,
  //  Cell, Tooltip, Legend 
  } from 'recharts';
// import Pie from '@bit/recharts.recharts.pie';
import Card from '@material-ui/core/Card';
import Table from './Table'
// const data01 = [
//   { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
// ];
const data02 = [
  { name: 'A1', value: 930 },
  { name: 'A2', value: 60 },
  { name: 'B1', value: 10 },
//   { name: 'B2', value: 80 },
//   { name: 'B3', value: 40 },
//   { name: 'B4', value: 30 },
//   { name: 'B5', value: 50 },
//   { name: 'C1', value: 100 },
//   { name: 'C2', value: 200 },
//   { name: 'D1', value: 150 },
//   { name: 'D2', value: 50 },
];

export default class Example extends PureComponent {
  render() {
    return (
        <Card  className="card-right">
      <PieChart width={400} height={400}  style={{width:"100%"}}>
        {/* <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="white" /> */}
        <Pie data={data02} dataKey="value" cx={230} cy={200} innerRadius={120} outerRadius={150} fill="#020828" label />
      </PieChart>
      <Table/>
      </Card>
    );
  }
}

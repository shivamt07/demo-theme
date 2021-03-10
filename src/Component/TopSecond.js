import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from '@material-ui/core/Card';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


class LineRechartComponent extends React.Component {

    data = [
        {
            "name": "Jan 2019",
            " ": 40,
            "Procuct B": 2342
        },
        {
            "name": "Feb 2019",
            " ": 10,
            "Procuct B": 3246
        },
        {
            "name": "Mar 2019",
            " ": 70,
            "Procuct B": 4556
        },
        {
            "name": "Apr 2019",
            " ": 40,
            "Procuct B": 4465
        },
        {
            "name": "May 2019",
            " ": 50,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 40,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 80,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 50,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 90,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 100,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 110,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 150,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 130,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 160,
            "Procuct B": 4553
        },
        {
            "name": "May 2019",
            " ": 120,
            "Procuct B": 4553
        }
    ]

    render() {
        return (
            <Card  className="card-third-style">
                <div className="text">
      Impressions
  </div>
  <div className="num">
    87K
  </div>

  <div className="text">
  <TrendingUpIcon style={{color:"#0ee50e" }}/> 12% of Target
  </div>
            <LineChart width={330} height={150} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Line dataKey=" " stroke="#00f3ff" fill="#00f3ff" />
                {/* <Line type="monotone" dataKey="Procuct B" stroke="#FF0000" /> */}
            </LineChart>
            </Card>
        )
    };
}

export default LineRechartComponent;
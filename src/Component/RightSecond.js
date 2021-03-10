import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from '@material-ui/core/Card';
import Tabs from './Tabs'
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
            <Card className="right-second-style">
                <div className="blue-card">              
                     <div className="text1">
                    Sales
  </div>
                    <div className="">
                        Lifetime sum of your sales
  </div>

                    <div className="text2">
                       12,540
  </div>
                </div>
                <Tabs/>
            
            </Card>
        )
    };
}

export default LineRechartComponent;
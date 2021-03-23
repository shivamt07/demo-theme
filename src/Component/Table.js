import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  // createData('Frozen yoghurt', 92.8, 6.0, 1.2),
  createData('Ice cream sandwich', 1.5, 0.4 , 0.2),
];


export default function BasicTable() {
  const classes = useStyles();

  const IncrementItem = () => {
    this.setState(prevState => {
      if(prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1
        }
      } else {
        return null;
      }
    });
}
const DecreaseItem = () => {
  this.setState(prevState => {
    if(prevState.quantity > 0) {
      return {
        quantity: prevState.quantity - 1
      }
    } else {
      return null;
    }
  });
}
const ToggleClick = () => {
  this.setState({
    show: !this.state.show
  });
}
const handleChange = (event) => {
  this.setState({quantity: event.target.value});
}

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell >Desktop</TableCell>
            <TableCell >Mobile</TableCell>
            <TableCell >Tablet</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell >92.8%</TableCell>
            <TableCell >6%</TableCell>
            <TableCell >1.2%</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell ><ArrowDownwardIcon onClick={DecreaseItem} style={{fontSize:"11px" , color:"red"}}/>{row.calories}%</TableCell>
              <TableCell ><ArrowUpwardIcon onClick={IncrementItem} style={{fontSize:"11px" , color:"green"}}/>{row.fat}%</TableCell>
              <TableCell ><ArrowUpwardIcon onClick={IncrementItem} style={{fontSize:"11px" , color:"green"}}/>{row.carbs}%</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

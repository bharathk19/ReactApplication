import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

function Expenses(props){


    return (
      <Card className="expenses"> 
        <ExpenseItem
          title={props.itemData[0].title}
          amount={props.itemData[0].amount}
          date={props.itemData[0].date}
        />
        <ExpenseItem
          title={props.itemData[1].title}
          amount={props.itemData[1].amount}
          date={props.itemData[1].date}
        />
        <ExpenseItem
          title={props.itemData[2].title}
          amount={props.itemData[2].amount}
          date={props.itemData[2].date}
        />
      </Card>
    );
}

export default Expenses;
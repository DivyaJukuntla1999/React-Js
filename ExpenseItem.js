import Card from "../UI/Card";
import React from "react"; // Importing `useState` from React

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
        
      </div>

    </Card>
    </li>
  );
}

export default ExpenseItem;

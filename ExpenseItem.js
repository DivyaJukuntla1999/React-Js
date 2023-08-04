import React from "react"; // Don't forget to import React

import "./ExpenseItem.css";

function ExpenseItem(props) { // Add curly braces for function definition
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 500;
  const locationOfExpenditure = 'Hubli';

  return ( 
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>{props.location} - {props.date.toISOString()}</div> {/* Assuming props.location and props.date are passed from the parent component */}
      <div className="expense-item__description">
        <h2>{expenseTitle} - {locationOfExpenditure}</h2>
        <div className="expense-item__price">Rs. {expenseAmount}</div>
        <h2>{props.title}</h2> {/* Assuming props.title and props.amount are passed from the parent component */}
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem; // Don't forget to export the component

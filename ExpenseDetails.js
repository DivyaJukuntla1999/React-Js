import React from 'react';

const ExpenseDetails = (props) => {
  return (
    <div className="expense-details">
      <h2>{props.title}</h2>
      <div className="expense-details__price"> Rs. {props.amount}</div>
      <div className="expense-details__location"> {props.location}</div>
    </div>
  );
}

export default ExpenseDetails;

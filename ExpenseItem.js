import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'; // Import the new ExpenseDetails component
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!!!');
  };
  const deleteExpenseHandler = () => {

  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={clickHandler}>change title</button>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;

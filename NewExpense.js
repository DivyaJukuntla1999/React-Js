import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => { // Add 'props' as a parameter
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const enteredData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(enteredData); // Fix the variable name here
    };

    return ( 
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
                </div>
    );
};

export default NewExpense;

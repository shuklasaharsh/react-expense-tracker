import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const editingHandler = (event) => {
        event.preventDefault();

        setIsEditing(true);
    }

    const cancelHandler = () => {
        setIsEditing(false);
    }


    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={editingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onReset={cancelHandler}/>}
        </div>
    );
};

export default NewExpense;

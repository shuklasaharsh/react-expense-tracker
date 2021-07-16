import React from 'react';

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

    const onSaveExpenseDateCallback = (expenseData) => {
        const expenseData2 = {
            ...expenseData,
            id: Math.random().toString()
        }
        console.log(expenseData2)

        props.onExpense(expenseData2)

    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseDateCallback={onSaveExpenseDateCallback}/>
    </div>
}

export default NewExpense
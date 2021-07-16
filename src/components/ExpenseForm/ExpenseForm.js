import React, { useState } from 'react';

import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
/*    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });*/


    const titleChangeHandler = (event) => {
/*        setUserInput({
            ...userInput,
            title: event.target.value
        });
        setUserInput((prevState)=> {
            return {
                ...prevState,
                title: event.target.value
            }
        })*/
        // console.log(event.target.value)

        setTitle(event.target.value)
    };
    const amountChangeHandler = (event) => {
/*        setUserInput((prevState)=> {
            return {
                ...prevState,
                title: event.target.value
            }
        })*/
        // console.log(event.target.value)
        setAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
/*        setUserInput((prevState)=> {
            return {
                ...prevState,
                title: event.target.value
            }
        })*/
        // console.log(event.target.value)
        setDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title,
            amount,
            date: new Date(date)
        }
        props.onSaveExpenseDateCallback(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
            </div>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className={'new-expense__actions'}>
                <button className="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
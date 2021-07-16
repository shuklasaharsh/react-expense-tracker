import Expenses from './components/Expenses/Expenses'

import NewExpense from "./components/ExpenseForm/NewExpense";
function App() {
    const expensesData = [
        {
            id: 'e1',
            title: 'Item1',
            amount: 99.99,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'Item2',
            amount: 99.99,
            date: new Date(2021, 2, 12)
        },
        {
            id: 'e3',
            title: 'Item3',
            amount: 99.99,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'Item4',
            amount: 99.99,
            date: new Date(2021, 5, 12),
        },
    ];

    return (
        <div>
            <NewExpense />
            <Expenses items={expensesData} />
        </div>
    );
}

export default App;
/*
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses;
    return (
        <div className="expenses">
            {expenses.map((item) => {
                return (<ExpenseItem date={item.date} amount={item.amount} title={item.title}></ExpenseItem>);
            })}     </div>);
}

export default Expenses;*/

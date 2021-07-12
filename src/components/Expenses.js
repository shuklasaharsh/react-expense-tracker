import ExpenseItem from './ExpenseItem'
import './Expenses.css'
const Expenses = (props) => {
    const items = props.items
    return (
        <div className='expenses'>
            {items.map((item)=>(<ExpenseItem date={item.date} amount={item.amount} title={item.title} />))}
{/*            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>*/}
        </div>
    );
}

export default Expenses

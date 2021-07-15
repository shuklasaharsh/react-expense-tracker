import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
const Expenses = (props) => {
    const items = props.items
    return (
        <Card className='expenses'>
            {items.map((item)=>(<ExpenseItem date={item.date} amount={item.amount} title={item.title} />))}
        </Card>
    );
}

export default Expenses

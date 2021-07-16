import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
const Expenses = (props) => {
    const Data = props.items
    return (
        <Card className='expenses'>
            {Data.map((item)=>(<ExpenseItem key = {item.id} date={item.date} amount={item.amount} title={item.title} />))}
        </Card>
    );
}

export default Expenses

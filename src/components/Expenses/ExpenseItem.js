import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props){
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     console.log(title);
    // };
    // <button onClick={clickHandler}>Change Title</button> unutra je bio i button za event handling

    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;
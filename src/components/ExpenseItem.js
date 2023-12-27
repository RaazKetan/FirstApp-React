import React from "react";
import './ExpenseItem.css';

//named props that are passed to the function key value pairs kesy are title, amount, date and value are the value set
function ExpenseItem( props) {
    const expenseDate =  new Date(2023, 12, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

   
    return (
        <div className="expense-item">
            <div >{props.date.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;
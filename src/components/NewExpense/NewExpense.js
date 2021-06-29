import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    // ova fja se executuje u drugoj komponenti - u ExpenseForm jer prosledjujemo pointer na ovu fju kroz props child-a (kroz onSaveExpenseData)
    // child komponenta moze komunicirati ka up komponenti, prosledjuju se data kao parametar

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    // ova fja se executuje u drugoj komponenti - u ExpenseForm jer prosledjujemo pointer na ovu fju kroz props child-a (kroz onSaveExpenseData)
    // child komponenta moze komunicirati ka up komponenti, prosledjuju se data kao parametar

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
      };

    const stopEditingHandler = () => {
    setIsEditing(false);
    };


    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
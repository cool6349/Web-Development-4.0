import React, { useState } from 'react'

export const ExpenseTracker = () => {
    const [input, setInput] = useState('')
    const [amount, setAmount] = useState('')
    const [expenses,setExpenses] = useState([])

    const addExpense =() => {
        if(!input || !amount) return;

        const newExpense =  {
            id: expenses.length+1,
            title : input,
            amount : amount 
        };
        setExpenses([...expenses,newExpense])
        setInput('')
        setAmount('')
    }

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expenses) => expenses.id !==id))
    }
    return (
        <div className='container'>
            <h2>Expenxse Tracker</h2>
            <div>

                <input type='text'
                    placeholder='Expense'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                ></input>


                <input type='number'
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                ></input>
                <button onClick={addExpense}>Add Expense</button>
            </div>
            <ul className='Expense-list'>
                {
                expenses.map((expense) => (
                    <li key={(expense.id)}>
                        <span>{expense.title}</span>
                        <span>{expense.amount}</span>

                        <button onClick={()=>deleteExpense(expense.id)}>Delete</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default ExpenseTracker

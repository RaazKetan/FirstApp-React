// import logo from './logo.svg';
// import { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {
        id: 'e1',
        title: 'Toilet', 
        amount: 294.67, 
        date: new Date(2023, 12, 28)
     },
    {
        id: 'e2',
        title: 'Car', 
        amount: 300.67, 
        date: new Date(2023, 12, 28)
     },
    {
        id: 'e3',
        title: 'Car Insurance', 
        amount: 400.67, 
        date: new Date(2023, 12, 28)
     },
    {
        id: 'e4',
        title: 'Travel', 
        amount: 500.67, 
        date: new Date(2023, 12, 28)
     },
]

  return (
    <div className="App">
      <h1>Lets Get Started</h1>
      <ExpenseItem title = {expenses[0].title} amount ={expenses[0].amount} date ={expenses[0].date}></ExpenseItem>
      <ExpenseItem title = {expenses[1].title} amount ={expenses[1].amount} date ={expenses[1].date}></ExpenseItem>
      <ExpenseItem title = {expenses[2].title} amount ={expenses[2].amount} date ={expenses[2].date}></ExpenseItem>
      <ExpenseItem title = {expenses[3].title} amount ={expenses[3].amount} date ={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

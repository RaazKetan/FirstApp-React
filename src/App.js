// import logo from './logo.svg';
// import { useState } from 'react';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import './App.css';

const App = () =>{
    const expenses = [
    
    {
        id: 'e1',
        title: 'TOilet Paper', 
        amount: 300.67, 
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
];

  return (
    <div>
    <h2>Let's get Hello!</h2>
     <Expenses items={expenses}/> 
    </div>
  );
}

export default App;

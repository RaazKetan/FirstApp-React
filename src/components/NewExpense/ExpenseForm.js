import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // same thing
  // const [userInput, setUserInput] = useState ({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });
   
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //     enteredTitle: event.target.value,
    //   });
    //instead of the above code we can use the below code if your state depends on the previous state
    //   setUserInput((prevState)=>{
    //  return {...prevState, enteredTitle: event.target.value};
    //   });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //     enteredDate: event.target.value,
    //   });
  };

  //Now we create a shared change handler for all the three input fields

  // const inputChangeHandler = (identifier, value) => {
  //     if(identifier === 'title'){
  //       setEnteredTitle(value);
  //     }
  //     else if(identifier === 'date'){
  //       setEnteredDate(value);
  //     }
  //     else if(identifier === 'amount'){
  //        setEnteredAmount(value);
  //      }
  // };

  const submitHandler = (event) => {
    
    //to stop relod when we click the button
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text"
           value= {enteredTitle} 
           onChange={titleChangeHandler}>

           </input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value= {enteredAmount}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

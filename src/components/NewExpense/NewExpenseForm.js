import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  // Approach A
  /*
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredItem, setEnteredItem] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    */
  // Approach B
  const [userInput, setUserInput] = useState({
    enteredDate: "",
    enteredItem: "",
    enteredCategory: "",
    enteredPayee: "",
    enteredAmount: "",
  });

  const dateChangeHandler = (event) => {
    // Approach A
    //setEnteredDate(event.target.value);
    // Approach B.A
    /*
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });
        */
    // Approach B.B
    // To ensure that the previous state value will be used. Because sometimes, state changes may be not be completed fast enough (hence incorrect value being used) due to many state changes being scheduled by React
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };
  const itemChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredItem: event.target.value,
      };
    });
  };
  const categoryChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredCategory: event.target.value,
      };
    });
  };
  const payeeChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredPayee: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault(); // Prevent default behaviour of reloading page

    const newExpenseData = {
      date: new Date(userInput.enteredDate),
      item: userInput.enteredItem,
      category: userInput.enteredCategory,
      payee: userInput.enteredPayee,
      amount: +userInput.enteredAmount, // Convert String to number
    };

    props.onSaveExpenseData(newExpenseData);

    // Reset form values
    setUserInput({
      enteredDate: "",
      enteredItem: "",
      enteredCategory: "",
      enteredPayee: "",
      enteredAmount: "",
    });
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2000-01-01"
            max="2999-01-01"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Item</label>
          <input
            type="text"
            value={userInput.enteredItem}
            onChange={itemChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Category</label>
          <input
            type="text"
            value={userInput.enteredCategory}
            onChange={categoryChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Payee</label>
          <input
            type="text"
            value={userInput.enteredPayee}
            onChange={payeeChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelUpdateParent}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;

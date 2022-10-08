import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  // Approach A
  /*
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    */
  // Approach B
  const [userInput, setUserInput] = useState({
    enteredDate: "",
    enteredTitle: "",
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
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
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
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,   // Convert String to number
    };

    props.onSaveExpenseData(newExpenseData);

    // Reset form values
    setUserInput({
      enteredDate: "",
      enteredTitle: "",
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
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
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

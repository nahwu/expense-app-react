import { useState } from "react";
// MUI dropdown box -- START
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
// MUI dropdown box -- END
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
    enteredDate: new Date().toJSON().slice(0, 10),
    enteredItem: "",
    enteredCategory: "Food and Drinks",
    enteredPayee: "Nah Wu",
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
      enteredDate: new Date().toJSON().slice(0, 10),
      enteredItem: "",
      enteredCategory: userInput.enteredCategory,
      enteredPayee: userInput.enteredPayee,
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
            min="2010-01-01"
            max="2099-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Item</label>
          <input
            type="text"
            value={userInput.enteredItem}
            onChange={itemChangeHandler}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          {/* <label>Category</label>
          <input
            type="text"
            value={userInput.enteredCategory}
            onChange={categoryChangeHandler}
          ></input> */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Category
              </InputLabel>
              <NativeSelect
                //defaultValue="Food and Drinks"
                inputProps={{
                  name: "category",
                  id: "uncontrolled-native",
                }}
                value={userInput.enteredCategory}
                onChange={categoryChangeHandler}
              >
                <option value="Food and Drinks">Food and Drinks</option>
                <option value="Leisure">Leisure</option>
                <option value="Transportation">Transportation</option>
                <option value="Household">Household</option>
                <option value="Baby">Baby</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div className="new-expense__control">
          {/*  <label>Payee</label>
          <input
            type="text"
            value={userInput.enteredPayee}
            onChange={payeeChangeHandler}
          ></input> */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Payee
              </InputLabel>
              <NativeSelect
                //defaultValue="Nah Wu"
                inputProps={{
                  name: "payee",
                  id: "uncontrolled-native",
                }}
                value={userInput.enteredPayee}
                onChange={payeeChangeHandler}
              >
                <option value="Nah Wu">Nah Wu</option>
                <option value="Zuo Er">Zuo Er</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div className="new-expense__control">
          <label>Amount ($)</label>
          <input
            type="number"
            min="0.01"
            max="999999"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            required
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

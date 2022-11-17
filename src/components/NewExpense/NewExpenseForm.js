import { useState } from "react";
// MUI dropdown box -- START
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
// MUI dropdown box -- END
// Toggle switch -- START
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// Toggle switch -- END
import "./NewExpenseForm.css";
import Divider from "@mui/material/Divider";

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
    enteredReceiver: "",
    enteredPayer: "Nah Wu",
    selectedAsExpense: true,
    expenseToggleColor: "error",
    expenseToggleLabel: "Expense",
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
  const receiverChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredReceiver: event.target.value,
      };
    });
  };
  const payerChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredPayer: event.target.value,
      };
    });
  };
  const expenseToggleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        selectedAsExpense: event.target.checked,
        // expenseToggleColor: event.target.checked ? "error" : "success",
        expenseToggleLabel: event.target.checked ? "Expense" : "Income",
        enteredPayer: event.target.checked ? "Nah Wu" : "GOV", // Failsafe default value
        enteredReceiver: event.target.checked ? "" : "Nah Wu", // Failsafe default value
        enteredCategory: event.target.checked ? "Food and Drinks" : "Income", // Failsafe default value
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
      payer: userInput.enteredPayer,
      receiver: userInput.enteredReceiver,
      expense: userInput.selectedAsExpense,
      isExpense: userInput.expenseToggleLabel,
      amount: +userInput.enteredAmount, // Convert String to number
    };

    props.onSaveExpenseData(newExpenseData);

    // Reset form values
    setUserInput({
      enteredDate: new Date().toJSON().slice(0, 10),
      enteredItem: "",
      enteredCategory: userInput.enteredCategory,
      enteredPayer: userInput.enteredPayer,
      enteredReceiver: userInput.enteredReceiver,
      selectedAsExpense: userInput.selectedAsExpense,
      expenseToggleColor: userInput.expenseToggleColor,
      expenseToggleLabel: userInput.expenseToggleLabel,
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
                <option value="Transportation">Transportation</option>
                <option value="Medical">Medical</option>
                <option value="Leisure">Leisure</option>
                <Divider />
                <option value="Household">Household</option>
                <option value="Baby">Baby</option>
                <Divider />
                <option value="Recurring">Recurring</option>
                <option value="Insurance">Insurance</option>
                <Divider />
                <option value="Income">Income</option>
                <Divider />
                <option value="Gift">Gift</option>
                <option value="Others">Others</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div className="new-expense__control">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Payer
              </InputLabel>
              <NativeSelect
                inputProps={{
                  name: "payer",
                  id: "uncontrolled-native",
                }}
                value={userInput.enteredPayer}
                onChange={payerChangeHandler}
              >
                <option value=""></option>
                <Divider />
                <option value="Nah Wu">Nah Wu</option>
                <option value="Zuo Er">Zuo Er</option>
                <Divider />
                <option value="ST">ST</option>
                <option value="CGH">CGH</option>
                <option value="Gov">Gov</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        {/* {!userInput.selectedAsExpense && ( */}
        <div className="new-expense__control">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Receiver
              </InputLabel>
              <NativeSelect
                inputProps={{
                  name: "receiver",
                  id: "uncontrolled-native",
                }}
                value={userInput.enteredReceiver}
                onChange={receiverChangeHandler}
              >
                <option value=""></option>
                <Divider />
                <option value="Nah Wu">Nah Wu</option>
                <option value="Zuo Er">Zuo Er</option>
                <Divider />
                <option value="Ma">Ma</option>
                <option value="Pa">Pa</option>
                <option value="Dad">Dad</option>
                <Divider />
                <option value="Shop">Shop</option>
                <option value="Gov">Gov</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        {/* )} */}
        <div className="new-expense__control">
          <FormControlLabel
            control={
              <Switch
                checked={userInput.selectedAsExpense}
                onChange={expenseToggleChangeHandler}
                color={userInput.expenseToggleColor}
              />
            }
            label={userInput.expenseToggleLabel}
          />
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
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;

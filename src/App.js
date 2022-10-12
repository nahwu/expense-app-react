import { useState } from "react";
import "./App.css";
import EnhancedTable from "./components/EnhancedTable";
import MenuSideBar from "./components/MenuSideBar";
import OverviewPanel from "./components/OverviewPanel";
import NewExpensePanel from "./components/NewExpense/NewExpensePanel";

function App() {
  const DUMMY_EXPENSE = [
    {
      id: "e1",
      item: "Toilet Paper",
      date: new Date(2020, 7, 14),
      category: "Household",
      payee: "",
      amount: 94.12,
    },
    {
      id: "e2",
      item: "New TV",
      date: new Date(2021, 2, 12),
      category: "Household",
      payee: "",
      amount: 799.49,
    },
    {
      id: "e3",
      item: "Car Insurance",
      date: new Date(2021, 2, 28),
      category: "Recurring",
      payee: "",
      amount: 294.67,
    },
    {
      id: "e4",
      item: "New Desk (Wooden)",
      date: new Date(2021, 5, 12),
      category: "Household",
      payee: "Bob",
      amount: 450,
    },
  ];

  const [expensesDataArray, setExpensesDataArray] = useState(DUMMY_EXPENSE);

  const addNewExpenseHandler = (newExpense) => {
    setExpensesDataArray((prevExpenseArray) => {
      return [newExpense, ...prevExpenseArray];
    });

    console.log("In App.js");
    console.log(expensesDataArray);
  };

  return (
    <div className="App">
      <MenuSideBar />
      <OverviewPanel />
      <NewExpensePanel onAddExpense={addNewExpenseHandler} />
      <EnhancedTable expenseDataArray={expensesDataArray} />
    </div>
  );
}

export default App;

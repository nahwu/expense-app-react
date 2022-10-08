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
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
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
      <EnhancedTable />
    </div>
  );
}

export default App;

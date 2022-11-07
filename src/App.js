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
      payer: "Nah Wu",
      receiver: "",
      isExpense: "Expense",
      amount: 14.12,
    },
    {
      id: "e2",
      item: "New TV",
      date: new Date(2021, 2, 12),
      category: "Household",
      payer: "Zuo Er",
      receiver: "",
      isExpense: "Expense",
      amount: 799.49,
    },
    {
      id: "e3",
      item: "Mobile bill - 9145311",
      date: new Date(2021, 2, 28),
      category: "Recurring",
      payer: "Zuo Er",
      receiver: "",
      isExpense: "Expense",
      amount: 64.67,
    },
    {
      id: "e4",
      item: "Salary",
      date: new Date(2021, 5, 12),
      category: "Income",
      payer: "GOV",
      receiver: "Zuo Er",
      isExpense: "Income",
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

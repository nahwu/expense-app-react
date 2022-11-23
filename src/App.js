import { useState, useEffect, useCallback } from "react";
import "./App.css";
import EnhancedTable from "./components/EnhancedTable";
import MenuSideBar from "./components/MenuSideBar";
import OverviewPanel from "./components/Overview/OverviewPanel";
import NewExpensePanel from "./components/NewExpense/NewExpensePanel";

function App() {
  const backendServerPath = "http://nahwu.synology.me:8080";
  //const backendServerPath = "http://127.0.0.1:8080";

  const [isLoading, setIsLoading] = useState(false); // TODO - To make use of this
  const [error, setError] = useState(null); // TODO - To make use of this

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

  const fetchLatestTransactionsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const rawResponse = await fetch(
        backendServerPath + "/v1/transactions/filters",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          //body: JSON.stringify({ pageSize: 10, b: "Textual content" }),
          body: JSON.stringify({
            pageSize: 100,
            sortBy: "date",
            sortDirection: "DESC",
          }),
        }
      );

      if (!rawResponse.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await rawResponse.json();

      const loadedTransactions = [];

      for (const key in responseData) {
        loadedTransactions.push({
          id: responseData[key]._id, //key,
          item: responseData[key].item,
          date: new Date(responseData[key].date),
          category: responseData[key].category,
          payer: responseData[key].payer,
          receiver: responseData[key].receiver,
          isExpense:
            !responseData[key].receiver || responseData[key].receiver === ""
              ? "Expense"
              : "Income",
          amount: responseData[key].amount,
          imageUrl: responseData[key].imageUrl,
        });
      }

      if (loadedTransactions && loadedTransactions.length > 0) {
        setExpensesDataArray(loadedTransactions);
      }
      console.log(loadedTransactions); // TODO - fetchTransactionsHandler is incorrectly being called 2 times upon page load
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchLatestTransactionsHandler();
  }, [fetchLatestTransactionsHandler]);

  const addNewExpenseHandler = async (newExpense) => {
    // Quick display update without requerying. Issue: May be prone to stale data display
    /*
    setExpensesDataArray((prevExpenseArray) => {
      return [newExpense, ...prevExpenseArray];
    });
    */

    const response = await fetch(backendServerPath + "/v1/transactions", {
      method: "POST",
      body: JSON.stringify(newExpense),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // TODO - Display error if unable to add transaction

    fetchLatestTransactionsHandler();
  };

  // Final actor for parentActOnDeleteTransactions. Part 3/3. from part 2/3
  const parentActOnDeleteTransactions = async (transactionsToDelete) => {
    console.log("Preparing to make API call to delete", transactionsToDelete);
    const rawIds = {};
    rawIds["listOfId"] = transactionsToDelete; // Prepare for conversion to JSON style

    const response = await fetch(backendServerPath + "/v1/transactions", {
      method: "DELETE",
      body: JSON.stringify(rawIds),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // TODO - Display error if unable to delete transaction

    fetchLatestTransactionsHandler();
  };

  return (
    <div className="App">
      <MenuSideBar />
      <OverviewPanel />
      <NewExpensePanel onAddExpense={addNewExpenseHandler} />
      <EnhancedTable
        expenseDataArray={expensesDataArray}
        parentActOnDeleteTransactions={parentActOnDeleteTransactions}
      />
    </div>
  );
}

export default App;

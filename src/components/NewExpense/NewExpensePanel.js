import { useState } from "react";
import "./NewExpensePanel.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpensePanel = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredNewExpenseData) => {
    const expenseData = {
      ...enteredNewExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    props.onAddExpense(expenseData); // Pass data to parent
  };

  const openNewExpenseFormHandler = (event) => {
    setIsEditing(true);
  };

  const closeNewExpenseFormHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={openNewExpenseFormHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelUpdateParent={closeNewExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpensePanel;

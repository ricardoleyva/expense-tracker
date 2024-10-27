//import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 20, category: "Groceries" },
    { id: 3, description: "ccc", amount: 30, category: "Transportation" },
    { id: 4, description: "ddd", amount: 40, category: "Entertainment" },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((exp) => exp.id !== id))}
      ></ExpenseList>
    </>
  );
}

export default App;

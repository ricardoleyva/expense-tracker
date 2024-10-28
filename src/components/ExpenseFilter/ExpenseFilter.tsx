import "./ExpenseFilter.css";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Transportation">Transportation</option>
      <option value="Utilities">Utilities</option>
    </select>
  );
};

export default ExpenseFilter;

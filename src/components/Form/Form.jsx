import React from "react";

const ExpenseForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.amount.value;
    const title = event.target.title.value;
    const date = event.target.date.value;
    const category = event.target.category.value;
    const expense = {
      amount,
      title,
      date,
      category,
    };
    let expenses = [];
    if (localStorage.getItem("expenses")) {
      expenses = JSON.parse(localStorage.getItem("expenses"));
    }
    expenses.push(expense);
    console.log(expenses);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    event.target.reset();
  };

  return (
    <div className="form-container">
      <h2>Expense Form</h2>
      {/* Add the missing <form> tag */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="">Select category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="others">Others</option>
          </select>
        </div>
        <button type="submit" className="btn">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;



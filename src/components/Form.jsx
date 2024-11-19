import React from "react";

const ExpenseForm = () => {
  return (
    <div className="form-container">
      <h2>Expense Form</h2>
      {/* Add the missing <form> tag */}
      <form>
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
          <input
            type="date"
            id="date"
            name="date"
            required
          />
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;






    {/* // <div className="form">
    //     <textarea>
    //     <h1>Expense App </h1>

    //     <label>Title</label>
    //     <input type='text' placeholder='Enter Title' /><br></br>
    //     <label>Amount</label>
    //     <input type='Amount' placeholder='Enter Amount' /><br></br>
    //     <label>Date</label>
    //     <input type='date' placeholder='Enter Date' /><br></br>
    //     <label>category</label>
    //     <input type='text' placeholder='Enter category' /><br></br>
    //     </textarea>
    // </div> */}

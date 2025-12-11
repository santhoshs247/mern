import React from "react";

function Balcon(props) {
    const { ExpenseData } = props;
    let income = 0;
    let expense = 0;

    ExpenseData.forEach((data) => {
        if (data.amount >= 0) {
            income += parseInt(data.amount);
        }
    });
    ExpenseData.forEach((data) => {
        if (data.amount < 0) {
            expense += parseInt(data.amount);
        }   
    });
    let balance = income + expense; 


  return (
    <div>
      <h1 align="center">Balance Container</h1>
      <div className="balance-container">
      <div className="income-container">
        <h3>Income</h3>
        <h3>{income}</h3>
      </div>
      <div className="expense-container">
        <h3>Expense</h3>
        <h3>{expense}</h3>
      </div>
      <div className="balance">
        <h3>Balance</h3>
        <h3>{balance}</h3>
      </div>
      </div>
    </div>
  );
}

export default Balcon;

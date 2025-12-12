import React, { useState,useEffect } from 'react'
import History from './history'
import Balcon from './Balcon';

function Expc() {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [Expense, setExpense] = useState([]);

  function handleitem(e) {
    setItem(e.target.value);
  }

  function handleamount(e) {
    setAmount(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    setExpense([...Expense, { item, amount }]);
  }

  function handlereset() {
    setItem("");
    setAmount("");
    setExpense([]);
  }
  async function fetchExpenses() {
      const response = await fetch('http://localhost:3001/expense');
      const data = await response.json();
      console.log(data);
  }
  useEffect(() => {
    fetchExpenses([]);
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const addressexpense = await fetch('http://localhost:3001/expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item, amount })
    });
  }


  return (
    <div className='container'>
      <div>
        <Balcon ExpenseData={Expense}/>
      </div>
      <div>
        <h1>Add Expense</h1>
        <form onSubmit={handlesubmit} className='form-section'>
          <input type="text" placeholder='Name' value={item} onChange={handleitem}/>
          <input type="number" placeholder='Amount' value={amount} onChange={handleamount}/>
          <button type="submit" onChange={handlesubmit}>Add amount</button>
          <button type="button" onClick={handlereset}>Reset</button>
        </form>
        <History ExpenseData={Expense} />
      </div>
    </div>
  )
}

export default Expc

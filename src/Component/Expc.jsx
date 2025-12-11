import React, { useState } from 'react'
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

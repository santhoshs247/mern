import React from 'react'

function history(props) {
  const { ExpenseData } = props;

  return (
    <div>
      {ExpenseData.map((item, index) => (
        <div key={index} className="history-item">
          <h2>Name</h2>
          <h3 className="history-title">{item.item}</h3>

          <h2>Amount</h2>
          <h3 className={item.amount >= 0 ? "income" : "expense"}>
            {item.amount}
          </h3>
        </div>
      ))}
    </div>    
  )
}

export default history
  
import React from 'react'

function history(props) {
  const { ExpenseData } = props;
 

  function handledelete(id) {
    props.deleteexpence(id);
  }

  return (
    <div>
      {ExpenseData.map((item, index) => (
        <div key={item._id} className="history-item">
          <h2>Name</h2>
          <h3 className="history-title">{item.item}</h3>

          <h2>Amount</h2>
          <h3 className={item.amount >= 0 ? "income" : "expense"}>
            {item.amount}
          </h3>
          <div>
            <button type="button" onClick={() => handledelete(item._id)}>Delete</button>
          </div>
        </div>

      ))}
    </div>    
  )
}

export default history
  
import React, { useState } from "react";
import data from "./data";
// import data from "./data"

export default function Input() {

  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");

  const [customerData, setCustomerData] = useState(data.bills);

  function showData() { 
    console.log(customerData);
  }

  function handleSubmitButton(event) {
    event.preventDefault();
    customerData.push({
      id: customerData[customerData.length-1].id+1,
      description: description,
      category: category,
      amount: amount,
      date: date
    })
      setTimeout(function () {showData()}, 500);
  }
    
  return (

    <div className="input-div">
      <h1>Add data</h1>
      <div className="input-form">
        <input
          className="input-box"
          type="text"
          placeholder="description"
          name="description"
          onChange={(event) => setdescription(event.target.value)}
        />
        <input
          className="input-box"
          type="text"
          placeholder="category"
          name="category"
          onChange={(event) => setcategory(event.target.value)}
        />
        <input
          className="input-box"
          type="number"
          placeholder="amount"
          name="amount"
          onChange={(event) => setamount(event.target.value)}
        />
        <input
          className="input-box"
          type="date"
          name="date"
          onChange={(event) => setdate(event.target.value)}
        />
        <button className="buttons" onClick={handleSubmitButton}> Add</button>
      </div>
    </div>
  );
}

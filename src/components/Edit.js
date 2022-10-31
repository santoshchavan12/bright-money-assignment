import React, { useState } from "react";
import data from "./data";
function Edit() {
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [amount, setamount] = useState("");
    const [date, setdate] = useState("");
    const [ID, setID] = useState('');
    const [showData, setShowData] = useState(false);
  const [customerData, setCustomerData] = useState(data.bills);

    const handleEditButton = () => {
        try {
            const id = parseInt(ID-1)
            console.log(ID)
            console.log(customerData)
            customerData[id].description = description;
            customerData[id].category = category;
            customerData[id].amount = amount;
            customerData[id].date = date;
            alert('Data Updated Successfully !')
        } catch (error) {
            alert(error)
        }

    }
    
    const fetchData = () => { 
        setShowData(!showData);
         try {
             const found = customerData.find((obj) => {
               return obj.id == ID;
             });
             setdescription(found.description);
             setdate(found.date);

             setamount(found.amount);
             setcategory(found.category);
         } catch (error) {
            alert('Data Not Found')
         }
    }
    function handleRemoveButton() { 
        const indexOfObject = customerData.findIndex((object) => {
          return object.id == parseInt(ID);
        });

        customerData.splice(indexOfObject, 1);
        alert('Data Deleted !')
    }
    

  return (
    <div className="input-div">
      <h1>Edit data</h1>
      <input
        className="input-box"
        type="text"
        placeholder="Enter ID to Fetch"
        name="description"
        onChange={(event) => setID(event.target.value)}
      />
      <button className="buttons" onClick={fetchData}>FETCH DETAILS</button>
      <br />
           {showData && <div className="input-form">
              <input
                  className="input-box"
                  type="text"
                  placeholder="description"
                  name="description"
                  onChange={(event) => setdescription(event.target.value)}
                  value={description}
              />
              <input
                  className="input-box"
                  type="text"
                  placeholder="category"
                  name="category"
                  onChange={(event) => setcategory(event.target.value)}
                  value={category}
              />
              <input
                  className="input-box"
                  type="number"
                  placeholder="amount"
                  name="amount"
                  onChange={(event) => setamount(event.target.value)}
                  value={amount}
              />
              <input
                  className="input-box"
                  name="date"
                  onChange={(event) => setdate(event.target.value)}
                  value={date}
              />
              <button className="buttons" onClick={handleEditButton}>
                  {" "}
                  Update
              </button>
              <br />
              <button className="buttons" onClick={handleRemoveButton}>
                  {" "}
                  Remove
              </button>
          </div>
          }
    </div>
  );
}

export default Edit;

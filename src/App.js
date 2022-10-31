import React, { useState,useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import SearchBar from "./components/SearchBar";
import data from "./components/data"
import Edit from "./components/Edit";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [categories, setCategories] = useState([]);
   
  useEffect(() => {
    const newData = data.bills;
     for (let i = 0; i < newData.length; i++) {
       setCategories(prev => 
         [...prev,newData[i].category]
       );
     }
  }, [])
  // console.log(categories)
  //  console.log(categories);
  function handleAdd() {
      setShowSearch(false);
    setShowAdd((showAdd) => !showAdd);
    
  }
  function handleSearch() {
    setShowAdd(false);
    setShowSearch((showSearch) => !showSearch);
  }
  return (
    <>
      <Navbar />
      <div className="imp--buttons">
        <h4 className="left-button" onClick={handleAdd}>
          {!showAdd ? "Edit" : "Add Component"}
        </h4>
        <h4 className="left-button" onClick={handleSearch}>
          { showSearch ? 'Close Search' : 'Search '}
        </h4>
      </div>
      {!showSearch && <div>{!showAdd ? <Input /> : <Edit />}</div>}
      {showSearch && <SearchBar data={data} length={categories.length} />}
    </>
  );
}

export default App;

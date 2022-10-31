import React, { useState } from "react";
import SearchList from "./SearchList";

export default function SearchBar(props) {
  // console.log(props.data.bills[0].category);
  const newData = props.categories;
  // console.log(newData.length);
  const [searchValue, setSearchValue] = useState("");

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }
  const handleClearClick = () => {
    setSearchValue("");
  };
  const display = searchValue.length > 0;


  const filteredCategories =
    props.data.bills.filter(
      (data) =>
      {
        const temp = data.category.toLocaleLowerCase();
        return temp.includes(searchValue.toLocaleLowerCase());
      });
  return (
    <div className="searchBar">
      <b>Enter Category </b>
      <br></br>
      <input className='input-box'
        type="text"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Travel, Food etc...."
      />
      {display && (
        <button className="button" onClick={handleClearClick}>
          {" "}
          clear{" "}
        </button>
      )}
      <div>
        <ul>
          {searchValue.length > 0 &&
            filteredCategories.map((id, DATA) => (
              <SearchList key={id.id} id={id} />
            ))}
        </ul>
      </div>
    </div>
  );
}


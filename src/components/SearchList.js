import React from 'react'
function SearchList(props) {
  return (
    <ul style={{  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "left"}}>
      <li style={{ listStyleType: "none" }}>{props.id.description}</li>{" "}
      <li style={{ listStyleType: "none" }}>{props.id.category}</li>{" "}
      <li style={{ listStyleType: "none" }}>{props.id.amount}</li>{" "}
      <li style={{ listStyleType: "none" }}>{props.id.date}</li> <br />
    </ul>
  );
}

export default SearchList
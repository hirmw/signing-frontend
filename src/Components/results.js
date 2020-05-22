import React from "react";

export const Results = props => {
  const pers = {
    fontfamily: "sans-serif",
    textAlign: "center",
    margin: "auto",
    height: "auto",
    background: "#617ecc",
    padding: "40px",
    borderbottom: "1px #ccc dotted"
  };
  return (
    <div style={pers}>
      {props.data.map(person => (
        <div className="resultsb">
          {" "}
          {person.names} {person.location}{" "}
        </div>
      ))}
    </div>
  );
};

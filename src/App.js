import React, { useState, useEffect, Component } from "react";
import "./styles.css";
import { Results } from "./Components/results";

export default function App() {
  const [finaldata, setfinaldata] = useState([]);
  const [location, setLocation] = useState("");
  const [names, setnames] = useState("");
  const [apidata, setapidata] = useState([]);

  const addstatus = () => {
    console.log("setting finaldata" + names + location);

    setfinaldata({ names, location });

    console.log(finaldata);
  };

  useEffect(() => {
    fetch("https://nlhn0-5000.sse.codesandbox.io/api/logins", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify(finaldata)
    }).then(response => {
      //console.log("coming back " + response);
    });
  }, [finaldata]);

  const getstatus = () => {
    async function goGet() {
      const data = await fetch(
        "https://nlhn0-5000.sse.codesandbox.io/api/logins"
      );
      const logins = await data.json();
      console.log(typeof logins);
      // console.log("effect" + logins);
      setapidata(logins);
      //console.log("in state" + apidata);
    }
    goGet();
  };

  const chosen = e => {
    setLocation(e.target.value);
  };

  const inputted = e => {
    setnames(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <input onChange={inputted} />
      </div>

      <div className="Input">
        <select onChange={chosen}>
          <option selected value="default" />
          <option value="Working From Home">Working From Home</option>
          <option value="Benhall">Benhall</option>
          <option value="self isolating">Self Isolating</option>
        </select>
      </div>

      <div className="Button">
        <button onClick={addstatus}> Sign In </button>
      </div>

      <div className="Button">
        <button onClick={getstatus}> Get Results </button>
      </div>

      <Results data={apidata}> </Results>
    </div>
  );
}

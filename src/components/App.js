
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./comp1";
import ChildComponent2 from "./comp2";

const App = () => {
  const [select,setSelect] = useState("")
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildComponent1 setSelect={setSelect} />
        <ChildComponent2 setSelect={setSelect} />
        <p>Selected option :- {select}</p>
    </div>
  )
}

export default App

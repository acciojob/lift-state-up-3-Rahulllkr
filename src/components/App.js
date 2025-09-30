
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./comp1";
import ChildComponent2 from "./comp2";

const App = () => {
  const [select,setSelect] = useState("")
  return (
    <div className="Parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildComponent1 setSelect={setSelect} />
        <ChildComponent2 setSelect={setSelect} />
        <h1>Selected option :- {select}</h1>
    </div>
  )
}

export default App

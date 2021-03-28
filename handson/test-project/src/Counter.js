import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // the setCounter will change the state of counter
    setCounter(counter + 1);
    if(counter === 10 -1){
        setCounter('You reached 10!!')
    }
  };
  return (
    <div className="col-md-3 mx-auto">
      <div className="card">
        <div className="card-body">
          <h1>{counter}</h1>
          <p>Counter</p>
          <button className="btn btn-primary" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;

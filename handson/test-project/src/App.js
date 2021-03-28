import logo from "./logo.svg";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [text, setText] = useState("Press the button!");

  let sentences = [
    'The road to success is always under construction.',
    'Where there is a "will," there are 500 relatives.',
    'Wear short sleeves. Support your right to bare arms!'
  ]
  
  const changeText = () => {

  }

  return (
    <div className="container">
      <div className="row">
        <Counter />

        <div className="col-md-3 mx-auto">
          <div className="card">
            <div className="card-body">
              <p>{text}</p>
              <button className="btn btn-primary">Press</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

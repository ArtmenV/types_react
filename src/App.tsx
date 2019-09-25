import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { Store } from "./store";

const App: React.FC = () => {
  const store = React.useContext(Store);
  return (
    <div className="App">
      {/* <Form /> */}
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode!!!</p>
    </div>
  );
};

export default App;

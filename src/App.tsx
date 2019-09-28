import React from "react";
import "./App.css";
import { Form } from "./components/Form";
import Counter from "./components/counter";
import { InputField } from "./components/InputField";
import { Notel } from "./components/Notes";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="main">
      <Form />
      <Counter />
      <InputField />
      <Notel />
    </div>
  );
};

export default App;

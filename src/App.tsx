import React from "react";
import "./App.css";
// import { Form } from "./components/Form";
import { InputField } from "./components/InputField";
import { Notes } from "./components/Notes";
import "./App.css";
import { CountsNotes } from "./components/CountsNotes";

const App: React.FC = () => {
  return (
    <div className="main">
      <CountsNotes />
      <InputField />
      <Notes />
    </div>
  );
};

export default App;

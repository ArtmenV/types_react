import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formAdd } from "../store/InputField/action";
import { Note } from "../store/InputField/types";

type FormEvent = React.FormEvent<HTMLFormElement>;
// interface IState {
//   value: string;
// }
export const InputField: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const HandleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const createNotes: Note = {
      text: value,
      id: Math.random(),
      important: false
    };
    dispatch(formAdd(createNotes));
    setValue("");
  };

  return (
    <form onSubmit={HandleSubmit}>
      <label htmlFor="Добавить записку"></label>
      <input
        placeholder="введите вашу заметку"
        value={value}
        type="text"
        onChange={event => setValue(event.target.value)}
        required
      />
    </form>
  );
};

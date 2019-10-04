import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formAdd } from "../store/InputField/action";
import { Note } from "../store/InputField/types";
import styles from "./InputField.module.css";
import { AppState } from "../store/index";

type FormEvent = React.FormEvent<HTMLFormElement>;

export const InputField: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const countNotes = useSelector(
    (state: AppState) => state.NotesReducer.notes.length
  );
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
    <form onSubmit={HandleSubmit} className={styles.main__form}>
      <div className={styles.main__form_container}>
        <label htmlFor="дневник"></label>
        <input
          placeholder="введите вашу заметку"
          value={value}
          type="text"
          onChange={event => setValue(event.target.value)}
          required
        />
      </div>
    </form>
  );
};

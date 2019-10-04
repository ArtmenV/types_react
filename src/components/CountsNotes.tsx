import React from "react";
import { AppState } from "../store/index";
import { useSelector } from "react-redux";
import styles from "./CountsNotes.module.css";

export const CountsNotes: React.FC = () => {
  const countNotes = useSelector((state: AppState) => state.NotesReducer.notes);

  const lengthNotes = countNotes.length;
  const importantNotes = countNotes.filter(note => note.important === true)
    .length;

  return (
    <div className={styles.main__countes_note}>
      Quantity all notes{" "}
      <strong style={{ color: "rgba(4, 154, 209, 0.6)" }}>
        &nbsp;{lengthNotes}
      </strong>
      &nbsp; important &nbsp;
      <strong style={{ color: "rgba(4, 154, 209, 0.6)" }}>
        {importantNotes}
      </strong>
    </div>
  );
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/index";
import styles from "./Notes.module.css";
import { deleteAction } from "../store/InputField/action";
import { Note } from "../store/InputField/types";

// interface NotesProps {
//   text: string,
//   id: number,
//   important: boolean,
//   deleteNotes: () => : any
// }
export const NoteItem = ({ text, deleteNotes, id }: any) => {
  return (
    <li className={styles.notes__list_item}>
      {text}
      <div className="notes__list_group_button">
        <button
          className={styles.notes__list_button_important}
          // onClick={() => addImportantAction(note.id)}
        >
          !
        </button>
        <button
          type="button"
          className={styles.notes__list_button}
          onClick={() => deleteNotes(id)}
        >
          &times;
        </button>
      </div>
    </li>
  );
};

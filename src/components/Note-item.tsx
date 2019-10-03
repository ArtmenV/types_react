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
export const NoteItem = ({
  text,
  deleteNotes,
  id,
  importantNote,
  stylesName
}: any) => {
  return (
    <li className={stylesName}>
      {text}
      <div className="notes__list_group_button">
        <button
          className={styles.notes__list_button_important}
          onClick={() => importantNote(id)}
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

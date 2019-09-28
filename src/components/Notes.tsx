import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/index";
import styles from "./Notes.module.css";
import { deleteAction } from "../store/InputField/action";
import { Note } from "../store/InputField/types";
import { NoteItem } from "./Note-item";

// interface NotesProps {
//   notes: [];
// }
export const Notel = () => {
  const notes = useSelector((state: AppState) => state.NotesReducer.notes);
  console.log(notes);
  const dispatch = useDispatch();

  const deleteNotes = (id: any) => {
    dispatch(deleteAction(id));
  };

  return (
    <ul className={styles.notes__list}>
      {notes.map(note => (
        <NoteItem
          key={note.id}
          text={note.text}
          deleteNotes={deleteNotes}
          id={note.id}
        />
      ))}
    </ul>
  );
};

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { AppState } from "../store/index";
// import styles from "./Notes.module.css";
// import { deleteAction } from "../store/InputField/action";
// import { Note } from "../store/InputField/types";

// // interface NotesProps {
// //   notes: [];
// // }
// export const Notel = () => {
//   const notes = useSelector((state: AppState) => state.NotesReducer.notes);
//   console.log(notes);
//   const dispatch = useDispatch();

//   const deleteNotes = (id: any) => {
//     dispatch(deleteAction(id));
//   };

//   return (
//     <ul className={styles.notes__list}>
//       {notes.map((note: Note) => {
//         return (
//           <li key={note.id} className={styles.notes__list_item}>
//             {note.text}
//             <div className="notes__list_group_button">
//               <button
//                 className={styles.notes__list_button_important}
//                 // onClick={() => addImportantAction(note.id)}
//               >
//                 !
//               </button>
//               <button
//                 type="button"
//                 className={styles.notes__list_button}
//                 onClick={() => deleteNotes(note.id)}
//               >
//                 &times;
//               </button>
//             </div>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

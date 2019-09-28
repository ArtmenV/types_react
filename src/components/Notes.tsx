import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/index";

interface NotesProps {
  notes: [];
}
export const Notel = () => {
  const notes = useSelector((state: AppState) => state.NotesReducer.notes);
  console.log(notes);
  return (
    <div>
      {notes.map(note => {
        return <p>{note.text}</p>;
      })}
    </div>
  );
};

// const mapStateToProps = (state: AppState) => ({
//   notes: state.NotesReducer.notes
// });

// export default connect(
//   mapStateToProps,
//   null
// )(Notel);

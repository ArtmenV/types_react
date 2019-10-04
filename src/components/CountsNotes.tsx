import React from "react";
import { AppState } from "../store/index";
import { useSelector } from "react-redux";

export const CountsNotes: React.FC = () => {
  const countNotes = useSelector(
    (state: AppState) => state.NotesReducer.notes.length
  );

  return (
    <>
      <div>{countNotes}</div>
    </>
  );
};

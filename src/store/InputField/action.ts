import { NotesActionTypes, ActionTypesForm, Note } from "./types";

export const formAdd = (data: Note): ActionTypesForm => ({
  type: NotesActionTypes.ADD_NOTE,
  payload: data
});

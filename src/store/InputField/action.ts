import {
  NotesActionTypes,
  ActionTypesForm,
  Note,
  ActionTypesFormDelete
} from "./types";

export const formAdd = (data: Note): ActionTypesForm => ({
  type: NotesActionTypes.ADD_NOTE,
  payload: data
});

export const deleteAction = (id: Note): ActionTypesFormDelete => ({
  type: NotesActionTypes.DELETE_NOTE,
  payload: id
});

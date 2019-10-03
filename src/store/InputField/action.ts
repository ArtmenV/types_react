import {
  NotesActionTypes,
  ActionTypesForm,
  Note,
  ActionTypesFormDelete,
  ActionTypesFormImportant
} from "./types";

export const formAdd = (data: Note): ActionTypesForm => ({
  type: NotesActionTypes.ADD_NOTE,
  payload: data
});

export const deleteAction = (id: Note): ActionTypesFormDelete => ({
  type: NotesActionTypes.DELETE_NOTE,
  payload: id
});

export const importantAction = (id: Note): ActionTypesFormImportant => ({
  type: NotesActionTypes.IMPORTANT_NOTE,
  payload: id
});

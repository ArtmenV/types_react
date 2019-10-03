import { Action } from "redux";

export interface Note {
  text: string;
  id: number;
  important: boolean;
}

export interface Notes {
  notes: Note[];
}

export enum NotesActionTypes {
  ADD_NOTE = "@@form/ADD_NOTE",
  DELETE_NOTE = "@@form/DELETE_NOTE",
  IMPORTANT_NOTE = "@@form/IMPORTANT_NOTE"
}

export interface ActionTypesForm extends Action {
  type: NotesActionTypes.ADD_NOTE;
  payload: Note;
}

export interface ActionTypesFormDelete extends Action {
  type: NotesActionTypes.DELETE_NOTE;
  payload: Note;
}

export interface ActionTypesFormImportant extends Action {
  type: NotesActionTypes.IMPORTANT_NOTE;
  payload: Note;
}

export type ActionsType =
  | ActionTypesForm
  | ActionTypesFormDelete
  | ActionTypesFormImportant;

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
  ADD_NOTE = "@@form/ADD_NOTE"
}

export interface ActionTypesForm extends Action {
  type: NotesActionTypes.ADD_NOTE;
  payload: Note;
}

export type ActionsType = ActionTypesForm;

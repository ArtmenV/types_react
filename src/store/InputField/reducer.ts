import { Notes, NotesActionTypes, ActionsType } from "./types";

export const initialState: Notes = {
  notes: [
    { text: "вася", id: 1, important: false },
    { text: "петя", id: 2, important: true },
    { text: "коля", id: 3, important: false }
  ]
};

export const NotesReducer = (
  state: Notes = initialState,
  action: ActionsType | any
): Notes => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      return { ...state.notes, notes: [...state.notes, action.payload] };

    default:
      return state;
  }
};

import { Notes, NotesActionTypes, ActionsType } from "./types";

export const initialState: Notes = {
  notes: [
    { text: "Купить новую планету", id: 1, important: false },
    { text: "Пробежать 100 километров", id: 2, important: true },
    { text: "Подружиться с кенгуру", id: 3, important: false }
  ]
};

export const NotesReducer = (
  state: Notes = initialState,
  action: ActionsType | any
): Notes => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      return { ...state.notes, notes: [...state.notes, action.payload] };
    case NotesActionTypes.DELETE_NOTE:
      return {
        ...state.notes,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case NotesActionTypes.IMPORTANT_NOTE:
      return {
        ...state.notes,
        notes: state.notes.map(note => ({
          ...note,
          important:
            note.id === action.payload ? !note.important : note.important
        }))
      };

    default:
      return state;
  }
};

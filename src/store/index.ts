import { NotesReducer } from "./InputField/reducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { count } from "./counter/reducer";

const rootReducer = combineReducers({
  count,
  NotesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

// export interface State {
//   count: CounterState;
//   NotesReducer: Notes;
// }

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState?: AppState) =>
  createStore(rootReducer, initialState, composeEnhancers(applyMiddleware()));

const store = configureStore();

export default store;

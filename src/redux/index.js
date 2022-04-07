import { createStore, combineReducers } from "redux";
import { filterReducer } from "./reducers/filter";
import { tasksReducer } from "./reducers/tasks";

const rootReducer = combineReducers({
  filter: filterReducer,
  tasks: tasksReducer,
});

const store = createStore(rootReducer);

export default store;

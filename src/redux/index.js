import { createStore } from "redux";

function reducer(state, action) {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: state.tasks[state.tasks.length - 1].id + 1,
          text: action.payload.text,
          completed: action.payload.checked,
        },
      ],
    };
  }

  if (action.type === "REMOVE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((obj) => obj.id !== action.payload),
    };
  }

  if (action.type === "TOGGLE_COMPLETE") {
    return {
      ...state,
      tasks: state.tasks.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            completed: !obj.completed,
          };
        }
        return obj;
      }),
    };
  }

  if (action.type === "COMPLETE_ALL") {
    return {
      ...state,
      tasks: state.tasks.map((obj) => ({
        ...obj,
        completed: true,
      })),
    };
  }

  if (action.type === "CLEAR") {
    return {
      ...state,
      tasks: [],
    };
  }

  if (action.type === "SET_FILTER") {
    return {
      ...state,
      filterBy: action.payload,
    };
  }

  return state;
}

const store = createStore(reducer, {
  filterBy: "all",
  tasks: [
    {
      id: 1,
      text: "Первая задача",
      completed: false,
    },
    {
      id: 2,
      text: "Вторая задача",
      completed: true,
    },
    {
      id: 3,
      text: "Задача 3",
      completed: false,
    },
    {
      id: 4,
      text: "Задача 4 ",
      completed: true,
    },
  ],
});

export default store;

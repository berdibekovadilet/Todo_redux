const initialState = [
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
];

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          text: action.payload.text,
          completed: action.payload.checked,
        },
      ];

    case "REMOVE_TASK":
      return state.filter((obj) => obj.id !== action.payload);

    case "TOGGLE_COMPLETE":
      return state.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            completed: !obj.completed,
          };
        }
        return obj;
      });

    case "COMPLETE_ALL":
      return state.map((obj) => ({
        ...obj,
        completed: true,
      }));

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

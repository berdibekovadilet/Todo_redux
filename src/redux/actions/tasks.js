export const addTask = (text, checked) => {
  return {
    type: "ADD_TASK",
    payload: {
      text,
      checked,
    },
  };
};

export const removeTask = (id) => ({
  type: "REMOVE_TASK",
  payload: id,
});

export const toggleComplete = (id) => ({
  type: "TOGGLE_COMPLETE",
  payload: id,
});

export const completeAll = () => ({
  type: "COMPLETE_ALL",
});

export const clearAll = () => ({
   type: "CLEAR",
})
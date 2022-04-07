import { Button, Divider, List, Paper } from "@mui/material";
import AddFeild from "./components/AddFeild";
import Item from "./components/Item";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./components/Filter";
import {
  addTask,
  removeTask,
  toggleComplete,
  completeAll,
  clearAll,
} from "./redux/actions/tasks";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleClickAdd = (text, checked) => {
    dispatch(addTask(text, checked));
  };

  const handleClickRemoveTask = (id) => {
    if (window.confirm("Удалить задачу?")) {
      dispatch(removeTask(id));
    }
  };

  const handleClickToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleClickCompleteAll = () => {
    dispatch(completeAll());
  };

  const handleClickClearAll = () => {
    if (window.confirm("Удалить всё?")) {
      dispatch(clearAll());
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задача</h4>
        </Paper>
        <AddFeild onAdd={handleClickAdd} />
        <Divider />
        <Filter />
        <Divider />
        <List>
          {state.tasks
            .filter((obj) => {
              if (state.filter.filterBy === "all") {
                return true;
              }
              if (state.filter.filterBy === "completed") {
                return obj.completed;
              }
              if (state.filter.filterBy === "active") {
                return !obj.completed;
              }
            })
            .map((obj) => (
              <Item
                key={obj.id}
                completed={obj.completed}
                text={obj.text}
                onClickRemove={() => handleClickRemoveTask(obj.id)}
                onClickCheckBox={() => handleClickToggleComplete(obj.id)}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button
            disabled={state.tasks.length === 0}
            onClick={handleClickCompleteAll}
          >
            Отметить все
          </Button>
          <Button disabled={state.tasks.length === 0} onClick={handleClickClearAll}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;

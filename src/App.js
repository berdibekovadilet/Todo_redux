import { useReducer } from "react";
import { Button, Divider, List, Paper, Tab, Tabs } from "@mui/material";
import AddFeild from "./components/AddFeild";
import Item from "./components/Item";

function reducer(state, action) {
  if (action.type === "ADD_TASK") {
    return [
      ...state,
      {
        id: state[state.length - 1].id + 1,
        text: action.payload.text,
        completed: action.payload.checked,
      },
    ];
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, [
    {
      id: 1,
      text: "Первая задача",
      completed: false,
    },
    {
      id: 2,
      text: "Купить молоко",
      completed: true,
    },
  ]);

  const addTask = (text, checked) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        text,
        checked,
      },
    });
  };
  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задача</h4>
        </Paper>
        <AddFeild onAdd={addTask} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершенные" />
        </Tabs>
        <Divider />
        <List>
          {state.map((obj) => (
            <Item key={obj.id} completed={obj.completed} text={obj.text} />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить все</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;

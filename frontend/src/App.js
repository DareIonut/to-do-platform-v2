import axios from "axios";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [errorField, setErrorField] = useState(false);
  const [helperText, setHelperText] = useState(false);

  const clickHandler = async () => {
    const body = {
      todoTitle: value,
      todoDescription: "Is this thing working?",
      isChecked: false,
    };

    await axios
      .post("http://localhost:5000/api/todos", body)
      .then((response) => {
        console.log(response.data);
        getData();
        setValue("");
        setErrorField(false);
        setHelperText(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorField(true);
        setHelperText(true);
      });
  };

  const getData = async () => {
    await axios
      .get("http://localhost:5000/api/todos")
      .then((response) => {
        setTodos(response.data);
        console.log(todos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const getError = async () => {};
  useEffect(() => {
    // Make a GET request when the component mounts
    getData();
  }, []);
  return (
    <div className="App">
      <Stack direction="row" spacing={2} margin="normal">
        <TextField
          error={errorField ? true : false}
          helperText={helperText ? "Introduce the todo!" : false}
          id="outlined-basic"
          label="Introduce todo"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Interview at 16"
        />
        <Button variant="contained" onClick={clickHandler}>
          <AddIcon fontSize="large" />
        </Button>
      </Stack>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={<Checkbox edge="end" />}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={todo.todoTitle} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default App;

import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Typography from '@material-ui/core/Typography';
import './styles.css';
import SaveTask from "./SaveTask";
import TodoList from './TodoList';

const App = () => {
    const [todos,setAll]=useState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
        <SaveTask
            saveTodo={(todoText) => {
                if (todoText.length > 0) {
                    setAll([...todos, todoText]);
                }
            }}
        />
        <TodoList
            todos={todos}
            deleteTodo={(todoIndex) => {
                const newTodos = todos.filter((_, index) => index !== todoIndex);

                setAll(newTodos);
            }}
        />
    </div>
  );
};


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

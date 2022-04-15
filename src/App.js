import React from "react";
// import './App.css';

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
    {
        text: "Cut Onions",
        completed: false,
    },
    {
        text: "Cut Tomatoes",
        completed: false,
    },
    {
        text: "Cut Carrots",
        completed: false,
    },
];

function App() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.text} text={todo.text} />
                ))}
                <TodoItem />
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;

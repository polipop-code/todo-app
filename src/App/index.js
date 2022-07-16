import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/TodoContext";

// const defaultTodos = [
// 	{
// 		text: "Cut Onions",
// 		completed: true,
// 	},
// 	{
// 		text: "Cut Tomatoes",
// 		completed: false,
// 	},
// 	{
// 		text: "Cut Carrots",
// 		completed: false,
// 	},
// ];

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;

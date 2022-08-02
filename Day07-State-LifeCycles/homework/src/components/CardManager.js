import { useState } from "react";
import TodoCard from "./TodoCard";

export default function CardManager(props) {
    let [todo, setTodo] = useState([
        { id: 1, title: "Lorem Ipsum" },
        { id: 2, title: "Lorem Ipsum 2" },
        { id: 3, title: "Lorem Ipsum 3" },
        { id: 4, title: "Lorem Ipsum 4" },
        { id: 5, title: "Lorem Ipsum 5" },
    ]);

    const addTodo = () => {
        let currentValue = document.getElementById('todoList').value;
        setTodo([...todo, { title: currentValue }]);
    }
    return (
        <div className="container">
            <div className="text-center py-4">
                <h2>Todo List</h2>
                <input type="text" className="mx-2" required placeholder="Todo List" id="todoList"></input>
                <button className="btn btn-primary mx-2" onClick={addTodo}>Add</button>
            </div>
            <div className="row">
                {
                    todo.map((currentValue, index) => (
                        <TodoCard key={index} title={currentValue.title}></TodoCard>
                    ))
                }
            </div>

        </div>
    )
}
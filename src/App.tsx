import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from "./Todolist";
import { log } from 'console';

const App = () => {
    // Мозги
    const truck1: string = 'What to learn1'
    const truck2: string = 'What to learn2'



    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    const removeTask = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    return (
        //Верстка
        <div className="app">
            <Todolist
                truck={truck1}
                tasks={tasks}
                deleteTask={removeTask}
            />

        </div>
    );
}

export default App;

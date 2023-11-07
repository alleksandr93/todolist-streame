import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

const App = () => {
    // Мозги
    const truck1: string = 'What to learn1'
    const truck2: string = 'What to learn2'
    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    return (
        //Верстка
        <div className="app">
            <Todolist
                truck={truck1}
                tasks={tasks1}
            />
            <Todolist
                truck={truck2}
                tasks={tasks2}
            />
        </div>
    );
}


export default App;

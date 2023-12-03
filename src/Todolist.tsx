import React, {useState} from 'react';
import {ButtonNameType} from "./App";


type PropsType = {
    truck: string
    tasks: TaskType[]
    deleteTask: (id: number) => void


}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    let [filterButtonName, setFilterButtonName] = useState<ButtonNameType>('All')

    const filterTasks = (buttonName: ButtonNameType) => {
        setFilterButtonName(buttonName)

    }

    const filtredTasks = () => {
        // let durshlag:TaskType[] = props.tasks
        switch (filterButtonName) {
            case 'Active':
                return props.tasks.filter(el => el.isDone);
            case 'Completed':
                return props.tasks.filter(el => !el.isDone)
            default:
              return   props.tasks
        }

    }
    return (
        <div className="todolist">
            <h3>{props.truck}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>

                {filtredTasks().map(el => {
                    // Пишем желательно такой избыточный синтаксис чтобы в случае чего debugger применять
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.deleteTask(el.id)}>Delete</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div className='buttons'>
                <button onClick={() => {
                    filterTasks('All')
                }}>All
                </button>
                <button onClick={() => {
                    filterTasks('Active')
                }}>Active
                </button>
                <button onClick={() => {
                    filterTasks('Completed')
                }}>Completed
                </button>
            </div>
        </div>
    );
};


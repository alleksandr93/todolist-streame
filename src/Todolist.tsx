import React from 'react';

type PropsType = {
    truck: string
    tasks: TaskType[]
}
type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    return (
        <div className="todolist">
            <h3>{props.truck}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el => {
                    // Пишем желательно такой избыточный синтаксис чтобы в случае чего debugger применять
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div className='buttons'>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};


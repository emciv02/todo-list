import React from "react";
import { ITask } from "@/types/tasks";
import Task from "./Task";

interface TodoListProps {
    tasks: ITask[],
}

const TodoList: React.FC<TodoListProps> = ({ tasks}) => {

   
    return (
    <div className="overflow-x-auto w-full mx-auto ">
        <table className="table w-full">
            <thead>

            <tr>
                <th className="font-bold text-lg">Tasks</th>
                <th className="font-bold text-lg">Actions</th>
            </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                <Task key={task.id} task={task}  >
                </Task>
                ))}
            </tbody>
        </table>
    </div>
    );
    }

    export default TodoList;    
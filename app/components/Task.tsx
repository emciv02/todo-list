"use client";

import { ITask } from "@/types/tasks";
import { MdEditNote } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
    task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const [modalEditOpen, setModalEditOpen] = useState<boolean>(false);
    const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false);
    const [newEditTaskValue, setNewEditTaskValue] = useState<string>(task.description);
    const router = useRouter();
    

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> =  async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            description: newEditTaskValue,
            isStriked: task.isStriked
                })
        setModalEditOpen(false);
        router.refresh();
    }

    const handleDeleteTask = async (id: string) => {
        await deleteTodo(id);
        setModalDeleteOpen(false);
        router.refresh();
    }

 
    return (
        <tr key={task.id}>
            <td 
                className={`w-full cursor-pointer ${task.isStriked ? 'line-through' : ''}`}>
                {task.description}
            </td>
            <td className="text-right flex items-center gap-4">
                <MdEditNote onClick={() => setModalEditOpen(true)} cursor="pointer" className="text-blue-500" size={25} />
                <Modal modalOpen={modalEditOpen} setModalOpen={setModalEditOpen}>
                    <form className="text-center" onSubmit={handleSubmitEditTodo}>
                        <h3 className="font-bold text-lg">Edit task</h3>
                        <div className="modal-action flex items-center">
                            <input 
                            value={newEditTaskValue}
                            onChange={(e) => setNewEditTaskValue(e.target.value)}
                            type="text" placeholder="Type here" className="input w-full" />
                            <button className="submit btn btn-xs btn-success">
                                Save
                            </button>
                        </div>
                    </form>
                </Modal>
                <GoTrash onClick={() => setModalDeleteOpen(true)} cursor="pointer" size={18} className="text-red-500"/>
                <Modal modalOpen={modalDeleteOpen} setModalOpen={setModalDeleteOpen}>
                    <div className=" flex flex-col items-center">
                        <h3 className="text-lg">Are you sure, you want to delete this task?</h3>
                        <div className="modal-action ">
                            <button className="btn btn-outline btn-success"
                            onClick={() => handleDeleteTask(task.id)}>
                                Yes
                            </button>                           
                        </div>
                    </div>
                </Modal>
            </td>
        </tr>
    );
};

export default Task;
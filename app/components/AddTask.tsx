"use client";

import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import {v4 as uuidv4} from "uuid";

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const router = useRouter();

    const [newTaskValue, setNewTaskValue] = useState("");
    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> =  async (e) => {
        e.preventDefault();
        await addTodo({
            id: uuidv4(),
            description: newTaskValue,
            isStriked: false

                })
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }
    return (
        <div>
            <button onClick={() => setModalOpen(true)} 
            className="btn btn-primary w-full border rounded-sm ">
                <div className="p-2 flex items-center font-bold ">
                Add new task<AiOutlinePlus className="ml-2" size={18}/>
                </div>
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo}>
                    <h3 className="font-bold text-lg">Add new task</h3>
                    <div className="modal-action ">
                        <input 
                        value={newTaskValue}
                        onChange={(e) => setNewTaskValue(e.target.value)}
                        type="text" placeholder="Type here" className="input   w-full" />
                        <button className="submit">
                            <MdOutlinePlaylistAdd size={30} />
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
    };
    export default AddTask;
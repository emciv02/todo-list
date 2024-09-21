import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import {getAllTodos} from "@/api";

export default async function Home() {
  const tasks = await getAllTodos();

  
  return (
    <main className="mx-auto max-w-4xl mt-4">
      <div className="text-center  my-5 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks}/>
    </main>

  );
}

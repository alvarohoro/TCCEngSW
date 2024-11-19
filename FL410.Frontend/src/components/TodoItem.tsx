import { Trash2 } from "lucide-react";
import { ITodo } from "../types/ITodo"

interface ITodoItemProps {
    todo: ITodo;
    onCompletedChange: (id: number, completed: boolean) => void;
    excluirItem: (id: number) => void;
}


export default function TodoItem({ todo, onCompletedChange, excluirItem }: ITodoItemProps) {


    return (
        <div key={todo.id} className="flex">
            <label className="flex grow items-center gap-2 border rounded-md p-3 bg-white hover:bg-slate-200 border-gray-400">
                <input
                    type="checkbox"
                    className="scale-125"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>Tarefa: {todo.title}</span>

            </label>
            <button 
                className="w-10 text-gray-500 p-1 m-1" 
                onClick={() => excluirItem(todo.id)}>
                <Trash2 size={20} className=""/>
            </button>

        </div>
    )

}
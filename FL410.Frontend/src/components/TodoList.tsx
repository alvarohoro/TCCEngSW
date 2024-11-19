import { ITodo } from "../types/ITodo";
import TodoItem from "./TodoItem";

interface ITodoListProps{
    todos: ITodo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
    
}

export default function TodoList({
    todos,
    onCompletedChange,
    onDelete
}:ITodoListProps) {

    const todosSorted = todos.sort((a,b) => {
        if(a.completed === b.completed){
            return b.id - a.id
        }
        return a.completed ? 1 : -1
    });

    return (
        <>
        <div className="space-y-2">
            {todosSorted.map(todo => (
                <TodoItem
                    key ={todo.id}
                    todo={todo}
                    onCompletedChange={onCompletedChange}
                    excluirItem={onDelete}
                />
            ))}
        </div>
        <div>
            {todos.length === 0 && (
                <p className="text-center text-sm text-gray-500">Sem tarefas! Adicione uma nova!</p>
            ) }
        </div>
        </>
        
    )
}
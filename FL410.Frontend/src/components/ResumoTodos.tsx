import { ITodo } from "../types/ITodo";

interface IResumoTodosProps{
    todos: ITodo[];
    deleteAllCompleted: () => void;
}

export default function ResumoTodos(
    {
        todos,
        deleteAllCompleted
    }:IResumoTodosProps
){
    const completedTodos = todos.filter(todo=>todo.completed);

    return(
        <>
            <div className="text-center">
                <p className="text-center text-gray-500 text-sm">
                    {completedTodos.length} / {todos.length} tarefas finalizadas
                </p>
                {completedTodos.length > 0 && (
                    <button
                        onClick={deleteAllCompleted}
                        className="text-red-500 text-sm hover:underline font-medium">
                        Excluir finalizadas
                    </button>
                )}
            </div>
        </>
    )
}
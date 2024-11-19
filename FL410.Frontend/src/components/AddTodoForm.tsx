import { useState } from "react"

interface IAddTodoFormProps{
    onSubmit: (title:string) => void;
}

export default function AddTodoForm({onSubmit}:IAddTodoFormProps){

    const [input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(!input.trim()) return;
        
        onSubmit(input);
        setInput("");

    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
                <input 
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                    type="text" 
                    placeholder="Nova tarefa..."
                    className="rounded-s-md grow border border-gray-400 p-2"    
                />
                <button 
                    type="submit" 
                    className="w-20 rounded-e-md bg-slate-900 text-white hover:bg-slate-700"> 
                        Adicionar 
                </button>
        </form>
    )
}
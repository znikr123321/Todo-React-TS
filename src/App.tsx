import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Modal from "./Modal";
interface ChildProps {
    id: number; 
    title: string; 
    description:string;
}

const App: React.FC = () =>{
    const [todo, setTodo] = useState<ChildProps[]>([
        {id:1, title: 'qwe', description: 'qwe'},
        {id:2, title: 'qwe2', description: 'qwe2'},
        {id:3, title: 'qwe3', description: 'qwe3'}]
    );

    const addItem = (title:string, description:string) =>{
        if (title && description){
            const newTodo = {id: todo.length + 1, title, description}
            setTodo([...todo, newTodo])
        }
    }

    const deleteItem = (id:number) =>{
        setTodo(prev => prev.filter((item)=>item.id !== id))
    }
    
    const [modalActive, setModalActive] = useState(true);
    
    return(
        <div>
            <Form addItem = {addItem} />
            <TodoList todo = {todo} deleteItem ={deleteItem} setActive = {setModalActive}/>
            <Modal active = {modalActive} setActive = {setModalActive}/>
        </div>
    )
}

export { App};export type { ChildProps };
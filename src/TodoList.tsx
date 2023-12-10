
import { ChildProps } from "./App";

interface TodoListProps {
    todo: ChildProps[]
    deleteItem: (id: number) => void
    setActive: (bolean: boolean) => void
	openModal: (arg:ChildProps) => void
}

const TodoList = ({ todo, deleteItem, setActive, openModal }: TodoListProps) => {


    return (
        <div>
            {
                todo.map((task) => (
                    <div key={task.id}>
                        <span>{task.id}</span>
                        <span>{task.title}</span>
                        <span>{task.description}</span>
                        <button onClick={(e) => {
                            e.preventDefault();
                            deleteItem((task.id));
                        }}>Удаление</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            setActive(true)
							openModal(task)
                        }}>редактировать</button>
                    </div>
                ))
            }
        </div>
    );
}

export default TodoList;
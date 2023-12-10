import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Modal from "./Modal";
interface ChildProps {
  id: number;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<ChildProps[]>([
    { id: 1, title: "qwe", description: "qwe" },
    { id: 2, title: "qwe2", description: "qwe2" },
    { id: 3, title: "qwe3", description: "qwe3" },
  ]);

  const addItem = (title: string, description: string) => {
    if (title && description) {
      const newTodo = { id: todo.length + 1, title, description };
      setTodo([...todo, newTodo]);
    }
  };

  const deleteItem = (id: number) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const [modalActive, setModalActive] = useState(false);

  const [editedTodo, setEditedTodo] = useState<ChildProps | null>(null);

  const openModal = (task: ChildProps) => { 
    setEditedTodo(task)
    setModalActive(true)
  };

  const closeModal = () => {
    setEditedTodo(null)
    setModalActive(false)
  }

  const saveChanges = (editedTitle: string, editedDescription: string) => {
    if (editedTodo) {
      const index = todo.findIndex((item) => item.id === editedTodo.id);

      if (index !== -1) {
        const updatedTodo = [...todo];
        updatedTodo[index] = {
          ...updatedTodo[index],
          title: editedTitle,
          description: editedDescription
        };
        setTodo(updatedTodo);
        closeModal();
      }
    }
  }

  return (
    <div>
      <Form addItem={addItem} />
      <TodoList
        todo={todo}
        deleteItem={deleteItem}
        setActive={setModalActive}
        openModal = {openModal}
      />
      {editedTodo && (
        <Modal active={modalActive} setActive={setModalActive}>
        <form>
          <input
            value={editedTodo.title}
            onChange={(e)=> 
              setEditedTodo((prev)=>({...prev!, title: e.target.value}))}
              placeholder="Название"
          />
          <input
            value={editedTodo.description}
            onChange={(e)=>
              setEditedTodo((prev)=>({...prev!, description: e.target.value}))
            }
            placeholder="Описание"
          />
          <button
            onClick={(e)=>{
              e.preventDefault()
              saveChanges(editedTodo.title, editedTodo.description)
            }}
          >Сохранить</button>
        </form>
      </Modal>
      )}
    </div>
  );
};

export { App };
export type { ChildProps };

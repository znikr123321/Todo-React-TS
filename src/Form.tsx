import { useState } from "react";

type Props = {
  addItem: (title:string, description:string) => void
}

const Form = ({addItem}:Props) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  return (
    <div>
      <form>
        <input
        placeholder="Название"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <input
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        placeholder="Описание"
        />
        <button
        onClick={(e)=>{
          e.preventDefault()
          addItem(title,description)
          setTitle('');
          setDescription('')
        }
        }
        >Добавить</button>
      </form>
    </div>
  )
}

export default Form

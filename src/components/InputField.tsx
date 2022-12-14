import React, { useRef } from 'react'
import "./styles.css";

interface Props { // define the types of todo and setTodo for the Functional Component
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
} 

const InputField = ( {todo, setTodo, handleAdd }: Props ) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {handleAdd(e); inputRef.current?.blur()} } >
      <input type="input" value={todo} onChange={(e) => setTodo(e.target.value)} ref={inputRef} placeholder='Enter todo' className='input_box '/>
      <button className='input_submit' type='submit' >Go</button>
    </form>
  )
}

export default InputField

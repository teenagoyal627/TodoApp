import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
// import {GrCheckbox} from 'react-icons/gr'
const style = {
  li: `flex justify-between bg-slate-200 p-4 text-xl my-2 capitalize`,
  liComplete:`flex justify-between bg-slate-300 p-4 text-xl my-2 capitalize`,
  row: `flex`,
  text:`ml-2 cursor-pointer`,
  textComplete:`ml-2 cursor-pointer line-through`,
  input:  `w-5 height-40 mr-2 cursor-pointer`,
  button:` cursor-pointer flex items-center `,
};
const Todo = ({ todo, toggleCompleted ,deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          className={style.input}
          onChange={() => toggleCompleted(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleCompleted(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={()=>deleteTodo(todo.id)}>{<FaRegTrashAlt size={20} />}</button>
    </li>
  );
};

export default Todo;

import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "./Firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import Todo from "./Components/Todo"; //here we import todo.jsx folder means by this line of code we fetch the code of todo.jsx file

//this is for tailwing css..
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[blue] to-[red]`,
  container:`bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center p-2 text-gray-800`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100 `,
  count: ` text-center text-2xl p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const[input,setInput]=useState("")
  // console.log(input)

  //create todo
  const createTodo=async(e)=>{
    e.preventDefault();
    if(input===''){
    alert("Please enter a valid todo")
    return
    }
    await addDoc(collection(db,"todos"),{
      text:input,
      completed:false,
    })
    setInput("")
  }

  //read todo form firebase
  useEffect(() => {
    //useeffect used for perform side effcts .examples:fetching data,directly updation the dom and timers etc.
    const q = query(collection(db, "todos")); //here we use query for handles all the complixity of catching and reloading data as needed and collection is used for excess items  from document and bd is refer to database which is for local storage framework thaat enables developers to store data locally and
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []; //declare empty array
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //update todo in firebase
  const toggleCompleted = async (todo) => {
    await updateDoc(doc(db, "todos",todo.id),{
      completed:!todo.completed
    });
  };

  //delete todo
  const deleteTodo=async(id)=>{
    await deleteDoc(doc(db,"todos",id))
  }
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form} onSubmit={createTodo}>
          <input 
          className={style.input} 
          type="text"
           placeholder="Add todos" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
           />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo 
            key={index} 
            todo={todo} //pass as a props
            toggleCompleted={toggleCompleted} 
              deleteTodo={deleteTodo}
            />//pass as a porps
          ))}
        </ul>
        {todos.length<1 ? null :
        <p className={style.count}>{`You have ${todos.length} todos`}</p>
        }
      </div>
    </div>
  );
}

export default App;

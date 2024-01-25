import { useState,useEffect } from 'react';
import './App.css'
import { Todo } from './Todo';

function App() {
  const [todos,setTodos]=useState([]);

  async function sleep(time){
    return new Promise((res,rej)=>{
        setTimeout(res,time);
    })
  }
  async function fetchDataAndUpdateState(){
    await sleep(3000);
    const response=await fetch("https://sum-server.100xdevs.com/todos");
    const data=await response.json();
    setTodos(data.todos);
  }
  useEffect(()=>{
    fetchDataAndUpdateState();
  },[todos])


  return (
    <>
      {todos.map((todo)=><Todo key={todo.id} todo={todo}/>)}
    </>
  )
}

export default App

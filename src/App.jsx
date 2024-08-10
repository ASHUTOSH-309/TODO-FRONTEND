import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [tasks,setTasks]=useState([])
useEffect(()=>{

  fetch("http://localhost:8000/todos").
  then(async function(res){

    const json=await res.json();
    setTasks(json.todos)

  })



},[])
 

  return (

    <div>

      <CreateTodo />
      <Todos tasks={tasks} />
    </div>
 
  )
}

export default App

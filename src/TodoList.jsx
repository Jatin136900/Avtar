import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import './Todo.css'



export default function TodoList() {
  const [inp, SetInp] = useState("")
  const [task, SetTask] = useState([])
  const [isEditing, setIsEditing] = useState(false);
  const [editId, SetEditId] = useState(null);


  function addTask() {
    if (!isEditing) {
      const obj = { id: Date.now(), task: inp, completed: false }

      SetTask([...task, obj]);
    }
    else {
      SetTask(
        task.map((obj) => {
          return obj.id === editId ? { ...obj, task: inp } : obj
        })
      );
      setIsEditing(false)
      SetEditId(null);

    }
    SetInp(""); // to clear the input 
  }



  function deleteTask(e, id) {
    const indexToDlete = task.findIndex((obj) => {
      return obj.id === id;
    });
    SetTask(task.filter((obj, index) => { return index != indexToDlete }))
  }


  function editTask(e, id) {
    const taskToEdit = task.find((task) => {
      return task.id === id;
    });
    SetInp(taskToEdit.task);
    setIsEditing(true);
    SetEditId(id)



  }


  function markAsComplete(e, id) {
    SetTask(
      task.map((obj) => {
        return obj.id === id ? { ...obj, completed: !obj.completed } : obj;
      }))
  }



  return (
    <>
      <div id='Todo'>
        <h1>Todo List</h1>
        <input type="text" placeholder='Enter The Task' value={inp} onChange={(e) => SetInp(e.target.value)} />
        <button onClick={addTask}>{!isEditing ? "Add Task" : "Edit Task"}</button>
      </div>
      <ul>
        {task.map((obj, index) => {
          return <li key={index} className={obj.completed ? "completed" : ""} ><span>{obj.task}</span>
            <MdDelete onClick={(e) => deleteTask(e, obj.id)} />
            {!obj.completed && <MdModeEdit onClick={(e) => editTask(e, obj, id)} />}
            {!obj.completed && <FaCheck onClick={(e) => markAsComplete(e, obj, id)} />}
          </li>
        })}
      </ul>

    </>
  )
};

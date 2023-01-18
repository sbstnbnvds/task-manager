import { useState, useEffect } from "react"
import React from "react"

const TaskList = () => {

  let [tasks, setTasks] = useState([])


  useEffect(() => {
    fetchTasks()
  }, [])


  let fetchTasks = async () => {

    let response = await fetch('http://localhost:8000/api/')
    let data = await response.json()
    setTasks(data)

    console.log(data)
  }

  return (
    <>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.body}
        </li>
      ))}
    </>
  )
}

export default TaskList
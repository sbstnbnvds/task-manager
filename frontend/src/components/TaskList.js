import { useState, useEffect } from "react"
import React from "react"
import TaskElement from "./TaskElement"

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
        <TaskElement task={task} />
      ))}
    </>
  )
}

export default TaskList
import { useState, useEffect } from "react"
import React from "react"
import TaskElement from "./TaskElement"

const TaskList = () => {

  let [tasks, setTasks] = useState([])

  let fetchTasks = async () => {

    let response = await fetch('/api/')
    let data = await response.json()
    setTasks(data)

    console.log(data)
    console.log("test")
  }

  useEffect(() => {
    fetchTasks()
  }, [/*tasks*/])


  return (<>
      {tasks.map((task, index) => (
        <TaskElement task={task} key={index}/>
        ))}
        </>
  )
}

export default TaskList
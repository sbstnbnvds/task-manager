const TaskElement = ({ task }) => {
  return (
    <li>
      <h1>{task.body} </h1>
      {task.due_date}
    </li>
  )
}

export default TaskElement
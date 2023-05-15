const TaskElement = ({ task }) => {
  return (
    <div className="task">
      <div className="task-body">{task.body} </div>
      <div className="task-due-date">
        {task.due_date}
      </div>
    </div>
  )
}

export default TaskElement


let dateStyler = (dueDate) => {
  let dueDateObject = new Date(dueDate)
  const formattedDate = dueDateObject.toString();
  const prettyText = formattedDate.split(" ");
  let dayOfWeek = prettyText[1]
  let dayOfMonth = prettyText[2]
  
  return dayOfWeek + " " + dayOfMonth;

}

const TaskElement = ({ task }) => {
  
  return (
    
    
    <div className="task-list">
      <div className="task-title">{task.body} </div>
      <div className="task-due-date">
        {dateStyler(task.due_date)}
      </div>
    </div>
  )
}

export default TaskElement
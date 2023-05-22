const TaskDetail = ({ match }) => {

  let taskID = match.params.id

  let[task, setTask] =

  let fetchTask = async () => {
    if (noteId === 'new') return

    let response = await fetch(`/api/notes/${noteId}/`)
    let data = await response.json()
    setNote(data)
  }

  return (
    <div>TaskDetail</div>
  )
}

export default TaskDetail
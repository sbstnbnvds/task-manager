import { useEffect } from "react";


function App() {

  let FetchTasks = async () => {
    let response = await fetch('http://localhost:8000/api/')
    let data = await response.json()
    console.log(data)
  }

  useEffect(()=>{
    FetchTasks()
  }, [])

  
  return (
    <div className="App">
      API

    </div>
  );
}

export default App;

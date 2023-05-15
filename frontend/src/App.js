import TaskList from "./components/TaskList";
import Header from "./components/Header";
import AddButton from "./components/AddButton";
import './App.css';


function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="main">
        <TaskList />      
      </div>
      <AddButton />
    </div>
  );
}

export default App;

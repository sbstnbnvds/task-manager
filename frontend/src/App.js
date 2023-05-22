import TaskList from "./components/TaskList";
import Header from "./components/Header";
import AddButton from "./components/AddButton";
import './AppDemo.css';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import TextBox from "./components/TextBox";

function App() {
  
  return (
    <div className="App">

      <Header />
      <Router>
      <div className="tasks">
        <TaskList />
        <TextBox />
      </div>
      </Router>
      <AddButton />
    </div>
  );
}

export default App;

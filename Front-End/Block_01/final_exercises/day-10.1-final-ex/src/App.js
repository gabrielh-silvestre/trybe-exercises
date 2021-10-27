import './App.css';
import TaskList from './components/Exercise1/TaskList';

const myTasks = ['Task1', 'Task2', 'Task3', 'Task4', 'Task5'];

function App() {
  return (
    <div className="App">
      <TaskList tasks={myTasks} />
    </div>
  );
}

export default App;

import './App.css';
// import TaskList from './components/Exercise1/TaskList';
import Header from './components/Exercise2/Header';
import Content from './components/Exercise2/Content';
import Footer from './components/Exercise2/Footer';

// const myTasks = ['Task1', 'Task2', 'Task3', 'Task4', 'Task5'];

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      {/* <TaskList tasks={myTasks} /> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import UserListFunc from './components/functionalComponents/UserList';
import UserListClass from './components/classComponents/UserList';

function App() {
  return (
    <div className="App">
      <UserListFunc />
      <UserListClass />
    </div>
  );
}

export default App;

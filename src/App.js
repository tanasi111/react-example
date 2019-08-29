import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Person from './components/Person/Person';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>react app</h1>
      <Person name="Ivan" />
      <Blog />
    </div>
  );
}

export default App;

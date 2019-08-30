import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Person from './components/Person/Person';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Person} />
        <Route path="/blog" exact component={Blog} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
      </div>
    </BrowserRouter>
  );
}

export default App;

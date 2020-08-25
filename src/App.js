import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MainPage from './MainPage.js';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={MainPage} />
      </div>
    </Router>
  );
}

export default App;

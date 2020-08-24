import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import MainPage from './components/ProjectPage/ProjectPage';

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

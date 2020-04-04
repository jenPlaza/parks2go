import React from 'react';
import Routes from './components/Routes';
//React Router
import{ BrowserRouter as Router }from 'react-router-dom'

//Material UI
import Paper from "@material-ui/core/Paper";

function App() {
  return (
	  <Router>
    <div className="App">
	  
	  <Paper><Routes /></Paper>
	  
    </div>
	  </Router>
  );
}

export default App;

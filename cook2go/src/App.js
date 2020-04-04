import React from 'react';
import Routes from './components/Routes';
//React Router
import{ BrowserRouter as Router }from 'react-router-dom'

function App() {
  return (
	  <Router>
	  <Routes />
	  </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;

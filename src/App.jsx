// App.jsx
import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route exact path="/login">
        {isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
      </Route>
      <Route exact path="/dashboard">
        {isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
      </Route>
      <Navigate to="/login" />
    </Routes>
  );
};

export default App;

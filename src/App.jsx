import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AuthGuard from './AuthGaurd';

function App() {
  return (
    <Router basename="/CS4227-Architecture">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

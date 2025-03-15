import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AuthGuard from "./AuthGaurd";

export default function App() {
  return (
    <Router basename="/CS4227-Architecture">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profile"
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
}

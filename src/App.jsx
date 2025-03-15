import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AuthGuard from "./AuthGaurd";

export default function App() {
  return (
    <Router>
          <Routes>
                <Route path="/" element={<Login />} />
                <Route path="" element={<Login />} />
                <Route  path="/profile"  element={
                    <AuthGuard>
                      <Profile />
                    </AuthGuard>
                  }
                />
          </Routes>
    </Router>
  );
}

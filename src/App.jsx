import { BrowserRouter as Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AuthGuard from "./AuthGaurd";

export default function App() {
  return (
      <Routes basename="/CS4227-Architecture">
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
  );
}

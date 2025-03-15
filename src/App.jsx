import { Router,Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AuthGuard from "./AuthGaurd";

export default function App() {
  return (
    <Router>
          <Routes>
                <Route path="/" element={<Login />} />
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


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/News" element={<News />} />


              <Route path="/Workspace" element={<Workspace />} />
              <Route path="/createWorkspace" element={<CreateWorkspace />} />
              <Route path="/viewWorkspace" element={<ViewWorkspace />} />


              <Route path="/workspaceChat/:id" element={<WorkspaceChat />} />

          </Routes>
      </Router>
  );
}

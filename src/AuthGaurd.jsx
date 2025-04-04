import { Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

export default function AuthGuard({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  AuthGuard.propTypes = {
    children: PropTypes.node.isRequired,
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/" />;
}

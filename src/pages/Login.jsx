import { signInWithGoogle } from "../firebase"; 
import { useNavigate } from "react-router-dom"; 
import { useState } from "react"; // Import useState for handling errors
import CurrentSkills from "../components/CurrentSkills";
import LearningSkills from "../components/LearningSkills";
import Navbar from "../components/Navbar";
import LoginComp from "../components/LoginComp";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);  // State for storing errors
  const [loading, setLoading] = useState(false);  // State for loading indicator

 const handleLogin = async () => {
    setLoading(true); // Start loading indicator
    setError(null);   // Clear any previous error

    try {
      const user = await signInWithGoogle(); // Try to sign in with Google
      if (user) {
        console.log("Signed in as:", user.displayName); // Log the user name to console
        navigate("/profile"); // Redirect to the profile page on success
      }
    } catch (err) {
      setError(err.message); // Capture any error and display it
      console.error("Error during sign-in:", err.message);
    } finally {
      setLoading(false); // Stop loading indicator after sign-in attempt
    }
  };
  

  return (
    <div>
      <Navbar />
      <LoginComp  loading={loading} error={error} handleLogin={handleLogin}/>
      <CurrentSkills loading={loading} error={error} handleLogin={handleLogin} />
      <LearningSkills loading={loading} error={error} handleLogin={handleLogin} />
    </div>
  );
}

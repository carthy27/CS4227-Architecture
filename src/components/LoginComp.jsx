import { LogIn} from "lucide-react";

const LoginComp = ({ loading, error, handleLogin }) => {
    return (
      <div className="login-container">
        <h1 className="heading">Skill Swap</h1>
  
        {/* Display loading state */}
        {loading && <p>Signing in ...</p>}
  
        {/* Show error message if there's an issue */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
  
        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-white text-black px-4 py-2 rounded flex items-center"
        >
          <LogIn />
        </button>
        </div>
    )
  };
  
  export default LoginComp;
  
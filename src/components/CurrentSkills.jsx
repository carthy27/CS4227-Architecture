import { LogIn, Hammer } from "lucide-react";

const CurrentSkills = ({ loading, error, handleLogin }) => {
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

      {/* Skills Section */}
      <div className="skills-container">
        <div className="current-skills">
          <Hammer color="red" size={48} />
          <h2 className="section-title">Skills I Can Teach</h2>
          <p>Guitar</p>
          <p>Computer Science</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentSkills;

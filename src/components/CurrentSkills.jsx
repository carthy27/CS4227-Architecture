import { Hammer } from "lucide-react";
import "../styles/Profile.css";
const CurrentSkills = ({ loading, error, handleLogin }) => {
  CurrentSkills.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleLogin: PropTypes.func.isRequired
  }
  return (
    <div className="login-container">
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

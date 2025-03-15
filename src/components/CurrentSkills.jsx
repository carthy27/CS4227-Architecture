import { Hammer } from "lucide-react";

const CurrentSkills = ({ loading, error, handleLogin }) => {
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

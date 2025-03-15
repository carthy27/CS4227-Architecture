import { Gavel} from "lucide-react";

const LearningSkills = ({ loading, error, handleLogin }) => {
  return (
    <div className="learning-skills">

    <ul className="skill-list">
  
          <Gavel color="red" size={48} />
          <h2 className="section-title">Skills I want to Learn</h2>
          <p>French</p>
          <p>Document Writing</p>
        
    </ul>
  </div>
  );
};

export default LearningSkills;

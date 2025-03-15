import React, { useState, useEffect } from "react";
import { auth, logout } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getUserData, updateUserSkills, updateUserProfile } from "../models/userModel";
import "../styles/Profile.css"; // Import the CSS file
import { Hammer,Gavel } from 'lucide-react';
import Navbar from "../components/Navbar";
export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [skillsToTeach, setSkillsToTeach] = useState([]);
  const [skillsToLearn, setSkillsToLearn] = useState([]);
  const [newSkillTeach, setNewSkillTeach] = useState("");
  const [newSkillLearn, setNewSkillLearn] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [contact, setContact] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        setUser(auth.currentUser);
        const data = await getUserData(auth.currentUser.uid);
        if (data) {
          setSkillsToTeach(data.skillsToTeach || []);
          setSkillsToLearn(data.skillsToLearn || []);
          setName(data.name || auth.currentUser.displayName || "");
          setSchool(data.school || "");
          setRole(data.role || "");
          setAddress(data.address || "");
          setBio(data.bio || "");
          setContact(data.contact || "");
        }
      } else {
        navigate("/");
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleAddSkillTeach = async () => {
    if (newSkillTeach.trim() === "") return;
    const updatedSkills = [...skillsToTeach, newSkillTeach.trim()];
    setSkillsToTeach(updatedSkills);
    setNewSkillTeach("");
    await updateUserSkills(user.uid, updatedSkills, skillsToLearn);
  };

  const handleAddSkillLearn = async () => {
    if (newSkillLearn.trim() === "") return;
    const updatedSkills = [...skillsToLearn, newSkillLearn.trim()];
    setSkillsToLearn(updatedSkills);
    setNewSkillLearn("");
    await updateUserSkills(user.uid, skillsToTeach, updatedSkills);
  };

  const handleUpdateProfile = async () => {
    await updateUserProfile(user.uid, name, school, role, bio, contact);
    setIsEditing(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const toLoginPage = async () => {
    navigate("/");
  }

  if (!user) return <p>Loading...</p>;

  return (
    <div className="full-screen">
      <Navbar />
      {/* Profile Editing Section */}
      <div className="section-container">
       <div className="profile">
          <h1 classname="profile-title">{name}</h1>
         <img src={user.photoURL} alt="Profile" className="profile-picture" />
          <h2 className="section-title">Profile Info</h2>
          {isEditing ? (
           <div className="flex flex-col">
            <input
              type="text"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="input-field"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="Enter your schools name "
            />
            <input
              type="text"
              className="input-field"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Indicate wether you are a student or a proffessional "
            />
            <input
              type="text"
              className="input-field"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your address"
            />
            <textarea
              className="input-field"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write a short bio"
            />
            <input
              type="text"
              className="input-field"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter contact details"
            />
            <button onClick={handleUpdateProfile} className="button button-save">
              Save Profile
            </button>
          </div>
          
        ) : (
          <div>
            <p className="text-lg"><strong>School:</strong>{school}</p>
            <p className="text-lg"><strong>Role:</strong>{role}</p>
            <p className="text-lg"><strong>Address: </strong>{address}</p>
            <p className="text-lg"><strong>Bio:</strong> {bio}</p>
            <p className="text-lg"><strong>Contact:</strong> {contact}</p>
            <button onClick={() => setIsEditing(true)} className="button button-edit">
              Edit Profile
            </button>
          </div>
        )}
        </div>
        {/* Skills to Teach */}
        <div className="current-skills">
          <Hammer color="black" size={48} />
          <h2 className="section-title">Skills I Can Teach</h2>
          <ul className="skill-list">
            {skillsToTeach.map((skill, index) => (
              <li key={index} className="skill-item">- {skill}</li>
            ))}
          </ul>
          <input
            type="text"
            className="input-field"
            placeholder="Add skill to teach..."
            value={newSkillTeach}
            onChange={(e) => setNewSkillTeach(e.target.value)}
          />
          <button onClick={handleAddSkillTeach} className="button button-add-teach">
            Add Skill
          </button>
        </div>

        {/* Skills to Learn */}
        <div class="editable">
        <div className="learning-skills">
          <Gavel color="black" size={48} />
          <h2 className="section-title">Skills I Want to Learn</h2>
          <ul className="skill-list">
            {skillsToLearn.map((skill, index) => (
              <li key={index} className="skill-item">- {skill}</li>
            ))}
          </ul>
          <input
            type="text"
            className="input-field"
            placeholder="Add skill to learn..."
            value={newSkillLearn}
            onChange={(e) => setNewSkillLearn(e.target.value)}
          />
          <button onClick={handleAddSkillLearn} className="button button-add-learn">
            Add Skill
          </button>
        </div>
      </div>
      </div>
      </div>
  );
}

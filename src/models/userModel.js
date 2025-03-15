// 📌 src/models/userModel.js
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

// Fetch user data from Firestore
export const getUserData = async (uid) => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() : null;
};

// Update user skills
export const updateUserSkills = async (uid, skillsToTeach, skillsToLearn) => {
  await updateDoc(doc(db, "users", uid), { skillsToTeach, skillsToLearn });
};

// Update user profile (name, bio, contact)
export const updateUserProfile = async (uid, name, bio, contact) => {
  await updateDoc(doc(db, "users", uid), { name, bio, contact });
};

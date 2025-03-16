// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";  // Import auth functions
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";  // Import Firestore functions
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxjZmmyaMccD4wrnPlbgcikQLOtUp_erE",
  authDomain: "skillswap-50ef2.firebaseapp.com",
  projectId: "skillswap-50ef2",
  storageBucket: "skillswap-50ef2.firebasestorage.app",
  messagingSenderId: "519194566481",
  appId: "1:519194566481:web:04daaddd031a6fe7ef3d70",
  measurementId: "G-XB12LJ20BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

/**
 * Sign in with Google and store user data in Firestore
 */
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user; // Firebase User Object

    // Check if user exists in Firestore
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      console.log("User data before saving:", {
        name: user.displayName,
        email: user.email,
        role: user.role || "user", // Default role if undefined
        school: user.school || "N/A", // Default school if undefined
        photo: user.photoURL,
        skills: [], // Empty skills array
        skillsToLearn: [],
        createdAt: new Date(),
      });

      // Store new user in Firestore
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        role: user.role || "user", // Default role if undefined
        school: user.school || "N/A", // Default school if undefined
        photo: user.photoURL,
        skills: [], // Empty skills array
        skillsToLearn: [],
        createdAt: new Date(),
      });
    }

    return user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

// Add skills to Firestore
export async function updateSkills(userId, skillsToTeach, skillsToLearn) {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, {
      skillsToTeach,
      skillsToLearn,
    });
  } catch (error) {
    console.error("Error updating skills:", error);
  }
}

/**
 * Sign out the user
 */
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export { auth, db, signInWithGoogle, logout };
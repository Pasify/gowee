import { createContext, useState } from "react";
import { app } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

// Initialize Firebase Auth
const AuthContext = createContext();

function AuthProvider({ children }) {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register a new user
  function signUpNewUser(userEmail, userPassword) {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword);
  }
  // sign in a user
  function signInUser(userEmail, password) {
    return signInWithEmailAndPassword(auth, userEmail, password);
  }
  function signOutUser() {
    return signOut(auth);
  }

  function resetUserPassword(userEmail) {
    return sendPasswordResetEmail(auth, userEmail);
  }

  const providerValues = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    signUpNewUser,
    signInUser,
    signOutUser,
    resetUserPassword,
    auth,
  };

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

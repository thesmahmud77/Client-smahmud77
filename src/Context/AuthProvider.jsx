import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currectUser) => {
      SetUser(currectUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  const AuthInfo = {
    user,
    SetUser,
    registerUser,
    logOut,
    signInUser,
    signInWithGoogle,
    loading,
    setLoading,
  };

  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;

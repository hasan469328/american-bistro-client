import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // google sign in
  const provider = new GoogleAuthProvider();
  

  const handleGoogleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  // gitHub sign in
  const gitProvider = new GithubAuthProvider();

  const handleGitHubSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, gitProvider);
  }

  const upDateProfile = () => {};

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loader,
    handleGoogleSignIn,
    auth,
    setLoader,
    handleGitHubSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

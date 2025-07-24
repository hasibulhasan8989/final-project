import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/config.firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const googleProvider = new GoogleAuthProvider();

  const singUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User --->", currentUser);
      if (currentUser) {
        const user = { user: currentUser.email };

        axiosPublic.post("/jwt", user).then((res) => {
          if (res.data.token) {
            localStorage.setItem("Access-Token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("Access-Token");
      }
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    user,
    loading,
    singUp,
    login,
    logOut,
    googleLogIn,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

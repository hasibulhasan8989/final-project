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
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User --->", currentUser);
       setUser(currentUser);
        if (currentUser) {
        const user = { user: currentUser.email };
        axiosPublic.post("/jwt", user)
        .then((res) => {
          if (res.data?.token) {
            localStorage.setItem("Access-Token", res.data.token);         
            setLoading(false);
          }
        }).finally(() => {
          setLoading(false); // ✅ move here to ensure it's only set after token
        });
      } else {
        localStorage.removeItem("Access-Token");
        setLoading(false)
        
      }
    });
  }, [axiosPublic]);



//   useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     console.log("Current User --->", currentUser);
//     setUser(currentUser);

//     if (currentUser) {
//       const user = { user: currentUser.email };
//       axiosPublic.post("/jwt", user).then((res) => {
//         if (res.data.token) {
//           localStorage.setItem("Access-Token", res.data.token);
//         }
//         setLoading(false); // ✅ Always stop loading
//       }).catch(() => {
//         setLoading(false); // ✅ Handle network errors too
//       });
//     } else {
//       localStorage.removeItem("Access-Token");
//       setLoading(false); // ✅ Must run even when user is null
//     }
//   });

//   return () => unsubscribe(); // ✅ Cleanup subscription
// }, [axiosPublic]);
 const token=localStorage.getItem("Access-Token")

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
    token
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const AuthComponent = (StyledFirebaseAuth as any).default
  ? (StyledFirebaseAuth as any).default
  : StyledFirebaseAuth;

export const firebaseConfig = {
  apiKey: "AIzaSyByci0j0u36PaK_2RNpOoC2QHq_Yi2pVhY",
  authDomain: "learn-robotsbuildingeducation.firebaseapp.com",
  projectId: "learn-robotsbuildingeducation",
  storageBucket: "learn-robotsbuildingeducation.appspot.com",
  messagingSenderId: "1016937880040",
  appId: "1:1016937880040:web:e9b478e361cafc4e61ec5d",
  measurementId: "G-N0MK759NHN",
};

// Initialize Firebase - this connects your code to firebase
export const app = initializeApp(firebaseConfig);

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export let auth = getAuth(app);

export const SignInScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // Check for user status
      console.log("auth", auth);
      console.log("user", user);
      if (user.displayName) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <AuthComponent
          id="firebaseui-auth-container"
          uiConfig={uiConfig}
          firebaseAuth={auth}
        />
      </div>
    );
  }

  return (
    <div>
      <h1>Login Test</h1>
      <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
      <a onClick={() => auth.signOut()}>Sign-out</a>
    </div>
  );
};

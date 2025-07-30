// App.js
import {useEffect } from "react";

function App() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google/login";
  };

  useEffect(() => {
    // Extract token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Store token in localStorage
      localStorage.setItem("jwtToken", token);
      // Redirect to the main page or dashboard
      window.location.href = "http://localhost:5173";
    }
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the App</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
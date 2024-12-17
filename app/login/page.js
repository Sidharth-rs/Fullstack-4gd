"use client";

import React, { useState, useEffect } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa"; // Importing Google and GitHub icons

export default function Login() {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Very weak");
  const [isSuccess, setIsSuccess] = useState(false); // For successful login
  const [isForgotPassword, setIsForgotPassword] = useState(false); // For forgot password view
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // For create account view

  useEffect(() => {
    // Client-only code here
    console.log("Running only on the client side.");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple check to simulate a successful login
    if (e.target.username.value && e.target.password.value) {
      setIsSuccess(true); // Update the state to show success
    } else {
      setIsSuccess(false);
      alert("Please enter valid credentials.");
    }
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true); // Show forgot password form
    setIsCreatingAccount(false); // Hide create account form
  };

  const handleCreateAccount = () => {
    setIsCreatingAccount(true); // Show create account form
    setIsForgotPassword(false); // Hide forgot password form
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    evaluatePasswordStrength(value);
  };

  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength("Very weak");
    } else if (password.length < 8) {
      setPasswordStrength("Weak");
    } else if (password.length < 12) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    setIsCreatingAccount(false); // Reset after successful account creation
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Welcome to 4GOOD.AI</h2>

        {isSuccess && !isForgotPassword && !isCreatingAccount ? (
          <div style={styles.successMessage}>Sign In Successful!</div>
        ) : isForgotPassword ? (
          <div>
            <h3 style={styles.header}>Reset Your Password</h3>
            <form style={styles.form}>
              <div style={styles.formGroup}>
                <label htmlFor="newPassword" style={styles.label}>
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="Enter your new password"
                  required
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.button}>
                Reset Password
              </button>
            </form>
            <button
              style={styles.forgotButton}
              onClick={() => setIsForgotPassword(false)}
            >
              Back to Login
            </button>
          </div>
        ) : isCreatingAccount ? (
          <div>
            <h3 style={styles.header}>Create Account</h3>
            <form onSubmit={handleAccountSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="dob" style={styles.label}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  required
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.button}>
                Create Account
              </button>
            </form>
            <button
              style={styles.forgotButton}
              onClick={() => setIsCreatingAccount(false)}
            >
              Back to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="username" style={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
                style={styles.input}
              />
              <div style={styles.passwordStrength}>{passwordStrength}</div>
            </div>
            <button type="submit" style={styles.button}>
              Sign In
            </button>
            <div style={styles.links}>
              <button
                type="button"
                onClick={handleForgotPassword}
                style={styles.forgotButton}
              >
                Forgot password?
              </button>
              <span style={styles.orText}>OR</span>
              <button
                style={styles.createAccountButton}
                onClick={handleCreateAccount}
              >
                Create account
              </button>
            </div>
          </form>
        )}

        <div style={styles.socialButtons}>
          <button style={styles.socialButton}>
            <FaGoogle style={styles.icon} />
            Sign in with Google
          </button>
          <button style={styles.socialButton}>
            <FaGithub style={styles.icon} />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
  },
  header: {
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    color: "#333333",
  },
  successMessage: {
    color: "green",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    marginBottom: "0.5rem",
    display: "block",
    color: "#666666",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #dddddd",
    outline: "none",
    marginBottom: "0.5rem",
  },
  passwordStrength: {
    fontSize: "0.875rem",
    color: "#888888",
    marginTop: "0.25rem",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "#ffffff",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    marginTop: "1rem",
  },
  forgotButton: {
    backgroundColor: "transparent",
    color: "#0070f3",
    fontSize: "0.9rem",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    marginTop: "0.5rem",
  },
  links: {
    marginTop: "1rem",
    textAlign: "center",
  },
  orText: {
    display: "inline-block",
    margin: "1rem 0",
    fontSize: "0.9rem",
    color: "#888888",
  },
  createAccountButton: {
    backgroundColor: "#eeeeee",
    color: "#0070f3",
    padding: "0.5rem 1rem",
    fontSize: "0.9rem",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
    textDecoration: "none",
  },
  socialButtons: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-around",
  },
  socialButton: {
    backgroundColor: "#eeeeee",
    padding: "0.75rem 1rem",
    fontSize: "0.9rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    width: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: "0.5rem",
    fontSize: "1.2rem",
  },
};

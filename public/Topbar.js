import React from "react";

function Topbar() {
  const styles = {
    topbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#d3d3d3", // grey background
      padding: "10px 20px",
      height: "60px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      color: "white",
    },
    logo: {
      height: "40px",
      objectFit: "contain",
    },
    rightSection: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    button: {
      backgroundColor: "#555",
      color: "white",
      border: "none",
      padding: "6px 12px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    welcomeText: {
      fontWeight: "500",
    },
    profilePic: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid white",
    },
  };

  return (
    <div style={styles.topbar}>
      {/* Left: University Logo */}
      <div>
        <img
          src="/universitylogo.jpeg"
          alt="University Logo"
          style={styles.logo}
        />
      </div>

      {/* Right: Buttons and Profile */}
      <div style={styles.rightSection}>
        <button style={styles.button}>Home</button>
        <button style={styles.button}>🔔</button>
        <span style={styles.welcomeText}>Welcome RAM</span>
        <img
          src="/ramimage.png"
          alt="Profile"
          style={styles.profilePic}
        />
      </div>
    </div>
  );
}

export default Topbar;

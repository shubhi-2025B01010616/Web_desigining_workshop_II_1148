import React from "react";

function App() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "lightgray",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          width: "350px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px gray",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "blue",
            marginBottom: "20px",
          }}
        >
          Student Registration Form
        </h2>

        <input
          type="text"
          placeholder="Student Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Course"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default App;
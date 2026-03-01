import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h2>Learning Management System</h2>
      <nav style={{ padding: "10px", background: "pink" }}>
        <Link to="/Home" style={{ margin: 10 }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: 10 }}>
          About
        </Link>
        <Link to="/courses" style={{ margin: 10 }}>
          Courses
        </Link>
        <Link to="/CourseDetails" style={{ margin: 10 }}>
          CourseDetails
        </Link>
        <Link to="/login" style={{ margin: 10 }}>
          Login
        </Link>
        <Link to="/register" style={{ margin: 10 }}>
          Register
        </Link>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";

function CourseDetails() {
  var course = {
    title: "",
    description: "",
    duration: "",
    instructor: "",
  };

  function handleChange(e) {
    course[e.target.name] = e.target.value;
  }

  function handleEnroll() {
    alert("You have enrolled in the course: " + course.title);
  }

  return (
    <>
      <h2>Enter Course Details</h2>

      <input
        type="text"
        name="title"
        placeholder="Course Name"
        defaultValue={course.title}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        name="duration"
        placeholder="Duration"
        defaultValue={course.duration}
        onChange={handleChange}
      />
      <br />
      <br />

      <input
        type="text"
        name="instructor"
        placeholder="Instructor Name"
        defaultValue={course.instructor}
        onChange={handleChange}
      />
      <br />
      <br />

      <h2>Course Details</h2>

      <p>
        <b>Course Name:</b> {course.title}
      </p>

      <p>
        <b>Duration:</b> {course.duration}
      </p>
      <p>
        <b>Instructor:</b> {course.instructor}
      </p>

      <button onClick={handleEnroll}>Enroll Course</button>
    </>
  );
}

export default CourseDetails;

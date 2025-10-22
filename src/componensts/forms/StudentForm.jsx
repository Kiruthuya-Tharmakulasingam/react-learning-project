import React, { useState } from "react";
import "../../styles/Forms.css";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <br />
      <input type="text" id="name" name="name" onChange={handleChange} />
      <br />
      <label for="age">Age</label>
      <br />
      <input type="number" id="age" name="age" onChange={handleChange} />
      <br />
      <br />
      <input type="submit" value="send" />
    </form>
  );
}

export default StudentForm;

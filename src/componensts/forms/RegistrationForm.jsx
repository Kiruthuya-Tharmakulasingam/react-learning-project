import React, { useState } from "react";
import "../../styles/Forms.css"

function RegistrationForm() {
  const defaultValues = {
    fullName: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    skills: [],
    bio: "",
  };

  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const skills = prev.skills.includes(value)
          ? prev.skills.filter((skill) => skill !== value)
          : [...prev.skills, value];
        return { ...prev, skills };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully! Check console for JSON data");

    setFormData(defaultValues); 
  };

  return (
    <>
    <div className="form-container">
      <h2>Registration Form</h2>

    <form onSubmit={handleSubmit}>

      <label>Full Name</label>
      <input type="text" name="fullName" placeholder="Enter your name" value={formData.fullName} onChange={handleChange} />
      <label>Age</label>
      <input type="number" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} />
      <label>Email</label>
      <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
      <label>Password</label>
      <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
      <label>Gender</label>
      <div className="radio-group">
      <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male
      <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female
      </div>
      <label>Country</label>
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Sri Lanka">Sri Lanka</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
      </select>

      <label>Skills</label>
      <div className="checkbox-group">
      <input type="checkbox" name="skills" value="HTML" checked={formData.skills.includes("HTML")} onChange={handleChange} /> HTML
      <input type="checkbox" name="skills" value="CSS" checked={formData.skills.includes("CSS")} onChange={handleChange} /> CSS
      <input type="checkbox" name="skills" value="JavaScript" checked={formData.skills.includes("JavaScript")} onChange={handleChange} /> JavaScript
      <input type="checkbox" name="skills" value="React" checked={formData.skills.includes("React")} onChange={handleChange} /> React
      <input type="checkbox" name="skills" value="Node.js" checked={formData.skills.includes("Node.js")} onChange={handleChange} /> Node.js
      </div>
      
      <label>Bio</label>
      <textarea name="bio" rows={4} value={formData.bio} onChange={handleChange} placeholder="Tell something about yourself..." />
      <button type="submit">Register</button>
    </form>
    </div>
    </>
  );
}

export default RegistrationForm;

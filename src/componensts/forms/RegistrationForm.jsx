import React from "react";

function RegistrationForm() {
 
  return (
    <form>
      <h2>Registration Form</h2>

      <label>Full Name</label><br />
      <input type="text" name="fullName" placeholder="Enter your name"
      /><br />

      <label>Age</label><br />
      <input type="number" name="age" placeholder="Enter your age"
      /><br />

      <label>Email</label><br />
      <input type="email" name="email" placeholder="Enter your email"
      /><br />

      <label>Password</label><br />
      <input type="password" name="password" placeholder="Enter your password"
      /><br />

      <label>Gender</label><br />
      <input type="radio" name="gender" value="Male"
      /> Male
      <input type="radio" name="gender" value="Female"
      /> Female<br />

      <label>Country</label><br />
      <select name="country">
        <option value="">Select</option>
        <option value="India">Sri Lanka</option>
        <option value="Sri Lanka">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
      </select><br />

      <label>Skills</label><br />
      <input type="checkbox" name="skills" value="HTML"
      /> HTML
      <input type="checkbox" name="skills" value="CSS"
      /> CSS
      <input type="checkbox" name="skills" value="JavaScript"
      /> JavaScript
      <input type="checkbox" name="skills" value="React"
      /> React
      <input type="checkbox" name="skills" value="Node.js"
      /> Node.js
      <br />

      <label>Bio</label><br />
      <textarea name="bio" placeholder="Tell something about yourself..."
      /><br /><br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

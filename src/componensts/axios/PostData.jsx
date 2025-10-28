import axios from "axios";
import React, { useState } from "react";

function PostData() {
  const defaultValues = {
      name: "",
      email: "",
      isActive: true,
    };

    const [formData, setFormData] = useState(defaultValues);

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
    const handleSubmit = async(e) => {
       e.preventDefault();
     try {
      await axios.post("https://express-mongo-connection-sigma.vercel.app/api/users",formData);
      alert("Student created successfully");
      console.log(formData);
      setFormData(defaultValues);
     } catch (error) {
      console.log(error);
      alert("Failed to create user");
     }
    };
    return (
<>
       <div className="content-container">
        <h1>FetchData</h1>
        <div className="content-body">Api call using axios</div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">First name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
      </>
    );
}
export default PostData
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../Features/profileSlice";

const Interests = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    profile: "",
    techStack: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    alert("Profile updated!");
    setFormData({ name: "", age: "", profile: "", techStack: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="profile"
        placeholder="Profile"
        value={formData.profile}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="techStack"
        placeholder="Tech Stack"
        value={formData.techStack}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default Interests;


import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    deadline: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.deadline) {
      alert("Please fill in all fields.");
      return;
    }
    onAddGoal(formData);
    setFormData({ title: "", amount: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Goal Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Buy a laptop"
        />
      </div>

      <div>
        <label htmlFor="amount">Target Amount (KES):</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="e.g. 50000"
        />
      </div>

      <div>
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;


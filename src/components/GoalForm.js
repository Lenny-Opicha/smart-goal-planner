import React, { useState } from 'react';

function GoalForm({ onAddGoal }) {
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !target) return;

    onAddGoal({
      title: title.trim(),
      target: Number(target),
      achieved: false
    });

    setTitle('');
    setTarget('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Target Amount ($)"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        min="1"
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;

import React from 'react';

function GoalItem({ goal, onDelete, onUpdate }) {
  const { id, title, description, targetAmount, currentAmount } = goal;
  const progress = ((currentAmount / targetAmount) * 100).toFixed(1);

  function handleDelete() {
    onDelete(id);
  }

  function handleAddSavings() {
    const added = parseFloat(prompt('Enter amount to add:'));
    if (!isNaN(added) && added > 0) {
      const updatedGoal = {
        ...goal,
        currentAmount: currentAmount + added,
      };
      onUpdate(updatedGoal);
    }
  }

  return (
    <div className="goal-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        Saved: ${currentAmount} / ${targetAmount} ({progress}%)
      </p>
      <progress value={currentAmount} max={targetAmount}></progress>
      <div className="goal-actions">
        <button onClick={handleAddSavings}>Add Savings</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default GoalItem;

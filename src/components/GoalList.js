import React from 'react';

function GoalList({ goals, onToggle, onDelete }) {
  return (
    <ul className="goal-list">
      {goals.map(goal => (
        <li key={goal.id} className={`goal-item ${goal.achieved ? 'achieved' : ''}`}>
          <div>
            <strong>{goal.title}</strong><br />
            <small>Target: ${goal.target}</small>
          </div>
          <div className="goal-actions">
            <button
              className="toggle-btn"
              onClick={() => onToggle(goal.id)}
              aria-label={`Mark goal ${goal.title} as ${goal.achieved ? 'not achieved' : 'achieved'}`}
            >
              {goal.achieved ? 'Undo' : 'Achieve'}
            </button>
            <button
              className="delete-btn"
              onClick={() => onDelete(goal.id)}
              aria-label={`Delete goal ${goal.title}`}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default GoalList;

import React, { useEffect, useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';

const API_URL = 'http://localhost:3000/goals';

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals from json-server
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error('Failed to fetch goals:', err));
  }, []);

  // Add a new goal
  function handleAddGoal(newGoal) {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGoal)
    })
      .then((res) => res.json())
      .then((savedGoal) => setGoals([...goals, savedGoal]));
  }

  // Toggle achieved status
  function handleToggleAchieved(id) {
    const updatedGoal = goals.find((g) => g.id === id);
    if (!updatedGoal) return;

    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ achieved: !updatedGoal.achieved })
    })
      .then((res) => res.json())
      .then((updated) => {
        setGoals((goals) =>
          goals.map((g) => (g.id === updated.id ? updated : g))
        );
      });
  }

  // Delete goal
  function handleDeleteGoal(id) {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setGoals((goals) => goals.filter((g) => g.id !== id));
    });
  }

  return (
    <div className="App">
      <h1>Lennys Smart Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      <GoalList
        goals={goals}
        onToggle={handleToggleAchieved}
        onDelete={handleDeleteGoal}
      />
    </div>
  );
}

export default App;

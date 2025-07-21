// src/App.js
import React, { useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header>
        <h1> Lennys Smart Goal Planner</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      <GoalForm />
      <GoalList />
    </div>
  );
}

export default App;

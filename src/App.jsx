import React, { useState, useEffect } from "react";
import './styles.css';
import GoalForm from "./GoalForm";
import GoalsList from "./GoalsList";

function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState(()=> {
    const localValue = localStorage.getItem("GOALS");
    if(localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("GOALS", JSON.stringify(goals))
  }, [goals])

  function handleSubmit(e) {
    e.preventDefault();
   if (newGoal.trim() !== ""){
    setGoals((currentGoals) => {
      return [
        ...currentGoals,
        { id: crypto.randomUUID(), title: newGoal, completed: false },
      ];
      
    });
   }
    setNewGoal("");
  }

  function toggleGoal(id, completed) {
    setGoals((currentGoals) => {
      return currentGoals.map((goal) => {
        if (goal.id === id) {
          goal.completed = completed;
          return { ...goal, completed };
        }
        return goal;
      });
    });
  }

  function deleteGoal(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <h1>Daily Goals</h1>
      <GoalForm newGoal={newGoal} setNewGoal={setNewGoal} handleSubmit={handleSubmit} />
      <h2>Goals List</h2>
      <GoalsList goals={goals} toggleGoal={toggleGoal} deleteGoal={deleteGoal} />
    </>
  );
}

export default App;

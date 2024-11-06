import React from "react";

function GoalItem({ goal, toggleGoal, deleteGoal }) {
  return (
    <li key={goal.id}>
      <label>
        <input
          type="checkbox"
          checked={goal.completed}
          onChange={(e) => toggleGoal(goal.id, e.target.checked)}
        />
        {goal.title}
      </label>
      <button onClick={() => deleteGoal(goal.id)} className="btn">
        Delete
      </button>
    </li>
  );
}

export default GoalItem;

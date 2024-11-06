import React from "react";
import GoalItem from "./GoalItem";

function GoalsList({ goals, toggleGoal, deleteGoal }) {
  return (
    <ul className="list">
      {goals.length === 0 && "No Goals"}
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          toggleGoal={toggleGoal}
          deleteGoal={deleteGoal}
        />
      ))}
    </ul>
  );
}

export default GoalsList;

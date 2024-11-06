import React from "react";

function GoalForm({ newGoal, setNewGoal, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="new-goal-form">
      <div className="goal-row">
        <label htmlFor="add-goal">
          Goal: 
          <input
            type="text"
            id="add-goal"
            onChange={(e) => setNewGoal(e.target.value)}
            value={newGoal}
            placeholder="Enter A New Goal"
          />
        </label>
        <button className="btn">Add Goal</button>
      </div>
    </form>
  );
}

export default GoalForm;

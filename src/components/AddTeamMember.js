import { useState } from "react";

function AddTeamMember({ onAddName }) {
  const [newName, setNewName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddName(newName);
    setNewName("");
  }
  return (
    <div className="add-member">
      <label>Someone missing? Add them here:</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="enter name"
        />
        <input className="button" type="submit" value="Add" />
      </form>
    </div>
  );
}

export default AddTeamMember;

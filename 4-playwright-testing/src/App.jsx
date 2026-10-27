import { useState } from "react";
import "./style.css";

const SKILLS = ["Frontend", "Backend", "Design", "AI"];
const MAX_TEAM_SIZE = 4;

export default function App() {
  const [members, setMembers] = useState([
    { name: "Maya", skill: "Frontend" },
    { name: "Arjun", skill: "AI" },
  ]);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("Frontend");
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState("");

  const isFull = members.length >= MAX_TEAM_SIZE;
  const shown = filter === "All" ? members : members.filter((m) => m.skill === filter);

  function addMember(event) {
    event.preventDefault();
    if (!name.trim()) {
      setError("Please enter a name");
      return;
    }
    if (isFull) {
      setError("Teams can have at most 4 people");
      return;
    }
    setMembers([...members, { name: name.trim(), skill }]);
    setName("");
    setError("");
  }

  function removeMember(index) {
    setMembers(members.filter((_, i) => i !== index));
    setError("");
  }

  return (
    <main className="app">
      <h1>Hackathon Team Builder</h1>
      <p className="count">{members.length} / {MAX_TEAM_SIZE} members</p>

      <form onSubmit={addMember} className="form">
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Lena" />
        </label>
        <label>
          Skill
          <select value={skill} onChange={(e) => setSkill(e.target.value)}>
            {SKILLS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <button type="submit">Add to team</button>
      </form>
      {error && <p className="error" role="alert">{error}</p>}

      <div className="filters" aria-label="Filter by skill">
        {["All", ...SKILLS].map((f) => (
          <button key={f} className={f === filter ? "active" : ""} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="empty">No one with this skill yet.</p>
      ) : (
        <ul className="members">
          {shown.map((m, i) => (
            <li key={m.name + i}>
              <span className="name">{m.name}</span>
              <span className="skill">{m.skill}</span>
              <button aria-label={`Remove ${m.name}`} onClick={() => removeMember(i)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

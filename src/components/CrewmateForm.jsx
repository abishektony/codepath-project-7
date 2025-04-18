import { useState } from 'react';

export default function CrewmateForm({ initialData = {}, onSubmit }) {
  const [name, setName] = useState(initialData.name || '');
  const [role, setRole] = useState(initialData.role || '');
  const [color, setColor] = useState(initialData.color || '');

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' ,padding: '20px'}}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, role, color });
      }}
    >
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <div>
        Role:
        {['Captain', 'Engineer', 'Medic'].map((r) => (
          <button type="button" key={r} onClick={() => setRole(r)}>{r}</button>
        ))}
      </div>
      <div>
        Color:
        {['Red', 'Blue', 'Green'].map((c) => (
          <button type="button" key={c} onClick={() => setColor(c)}>{c}</button>
        ))}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

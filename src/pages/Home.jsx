import { useEffect, useState } from 'react';
import { supabase } from '../supabase/client';
import { Link } from 'react-router-dom';

export default function Home() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('crewmates').select('*').order('created_at', { ascending: false });
      setCrewmates(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Crewmates</h1>
      <Link to="/create">Add New</Link>
      <ul>
        {crewmates.map((c) => (
          <li key={c.id}>
            <Link to={`/crewmate/${c.id}`}>{c.name}</Link> - {c.role} - {c.color}
            <Link to={`/edit/${c.id}`}>✏️ Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

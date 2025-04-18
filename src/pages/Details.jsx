import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase/client';

export default function Details() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    supabase.from('crewmates').select('*').eq('id', id).single().then(({ data }) => setCrewmate(data));
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div>
      <h2>{crewmate.name}</h2>
      <p>Role: {crewmate.role}</p>
      <p>Color: {crewmate.color}</p>
      <p>Created: {new Date(crewmate.created_at).toLocaleString()}</p>
      <div><Link to={`/edit/${crewmate.id}`}>Edit</Link></div>
      <div><Link to="/">Back to List</Link></div>
    </div>
  );
}

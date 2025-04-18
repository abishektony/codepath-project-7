import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/client';
import CrewmateForm from '../components/CrewmateForm';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    supabase.from('crewmates').select('*').eq('id', id).single().then(({ data }) => setCrewmate(data));
  }, [id]);

  const handleUpdate = async (updated) => {
    await supabase.from('crewmates').update(updated).eq('id', id);
    navigate('/');
  };

  const handleDelete = async () => {
    await supabase.from('crewmates').delete().eq('id', id);
    navigate('/');
  };

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Crewmate</h2>
      <CrewmateForm initialData={crewmate} onSubmit={handleUpdate} />
      <button onClick={handleDelete}>🗑️ Delete</button>
      <button onClick={() => navigate('/')}>Back to List</button>
    </div>
  );
}

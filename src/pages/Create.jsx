import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';
import CrewmateForm from '../components/CrewmateForm';

export default function Create() {
  const navigate = useNavigate();

  const handleSubmit = async (crewmate) => {
    const { data, error } = await supabase.from('crewmates').insert([crewmate]);
    if (!error) navigate('/');
  };

  return (
    <div>
      <h2>Create Crewmate</h2>
      <CrewmateForm onSubmit={handleSubmit} />
    </div>
  );
}

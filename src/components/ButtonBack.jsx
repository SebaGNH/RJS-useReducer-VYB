import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <button onClick={ () => navigate('/') } className='btn btn-outline-success m-2'>Volver</button>
  )
}
import { useNavigate } from 'react-router-dom';

export const ButtonBack = ({nombre = ''}) => {
  const navigate = useNavigate();

  return (
    <div className='mb-3'>

      <button onClick={ () => navigate('/') } className='btn btn-outline-success m-2'>Volver</button>

      <span className='text-info'> { nombre } </span>

    </div>
  )
}
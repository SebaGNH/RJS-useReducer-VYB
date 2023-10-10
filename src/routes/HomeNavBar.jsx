import { NavLink } from 'react-router-dom';
import { NlLuisCabrera } from './NlLuisCabrera';
import { NLRandom } from './NLRandom';

export const HomeNavBar = () => {
  return (
    <div className='container'>
      <h1 className='my-3 text-warning'>En esta sección están las rutas</h1>
      <NLRandom />
      <NlLuisCabrera/>
    </div>
  )
}

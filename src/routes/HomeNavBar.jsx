import { NavLink } from 'react-router-dom';
import { NL_LuisCabrera } from './NL_LuisCabrera';
import { NL_Random } from './NL_Random';

export const HomeNavBar = () => {
  return (
    <div className='container'>
      <h1 className='my-3 text-warning'>En esta sección están las rutas</h1>
      <NL_Random />
      <NL_LuisCabrera/>
    </div>
  )
}

import {Routes, Route} from 'react-router-dom';
import { HomeNavBar } from './HomeNavBar';
import { Contador } from '../ow-01-contador/pages/Contador';
import { ListaTareas } from '../gi-01-listaTareas/pages/ListaTareas'

export const AppRoutes = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomeNavBar />}/>
        <Route path='/Contador' element={<Contador />}/>
        <Route path='/ListaTareas' element={<ListaTareas />}/>
      </Routes>
    </div>
  )
}

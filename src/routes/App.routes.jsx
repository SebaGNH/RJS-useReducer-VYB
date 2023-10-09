import {Routes, Route} from 'react-router-dom';
import { HomeNavBar } from './HomeNavBar';
import { Contador } from '../ow-01-contador/pages/Contador';
import { ListaTareas } from '../gi-01-listaTareas/pages/ListaTareas';
import { CounterLC } from '../lc-01-contador/CounterLC';
import { CounterTypes } from '../lc-02-contadotTypes/CounterTypes';
import { TodoLC } from '../lc-03-todo/TodoLC';
import ProductAppLC from '../lc-04-productApp/ProductAppLC';


export const AppRoutes = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomeNavBar />}/>
        <Route path='/Contador' element={<Contador />}/>
        <Route path='/ListaTareas' element={<ListaTareas />}/>
        <Route path='/CounterLC' element={<CounterLC />}/>
        <Route path='/CounterTypes' element={<CounterTypes />}/>
        <Route path='/TodoLC' element={<TodoLC />}/>
        <Route path='/ProductAppLC' element={<ProductAppLC />}/>
      </Routes>
    </div>
  )
}

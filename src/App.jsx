import { AppRoutes } from './routes/App.routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
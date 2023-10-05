import { NavLink } from 'react-router-dom';

export const HomeNavBar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">

              <NavLink to="/Contador" className="nav-link btn btn-outline-primary m-1">
              Contador
              </NavLink>

              <NavLink to="/ListaTareas" className="nav-link btn btn-outline-primary m-1">
              ListaTareas
              </NavLink>

              <NavLink to="/CounterLC" className="nav-link btn btn-outline-primary m-1">
              Counter LC
              </NavLink>

              <NavLink to="/CounterTypes" className="nav-link btn btn-outline-primary m-1">
              Counter + Types
              </NavLink>
              <NavLink to="/TodoLC" className="nav-link btn btn-outline-primary m-1">
              Todo LC
              </NavLink>

            </ul>
          </div>
        </div>
      </nav>

      <h1>En esta sección están las rutas</h1>
    </div>
  )
}

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

            </ul>
          </div>
        </div>
      </nav>

      <h1>En esta sección están las rutas</h1>
    </div>
  )
}

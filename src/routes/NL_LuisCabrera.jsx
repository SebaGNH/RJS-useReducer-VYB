import { NavLink } from 'react-router-dom';

export const NL_LuisCabrera = () => {
  return <div className='my-3'>
    <h2 className='text-info'>Luis Cabrera</h2>
    <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <NavLink to="/CounterLC" className="nav-link btn btn-outline-primary m-1">
              Counter LC
              </NavLink>

              <NavLink to="/CounterTypes" className="nav-link btn btn-outline-primary m-1">
              Counter + Types
              </NavLink>
              <NavLink to="/TodoLC" className="nav-link btn btn-outline-primary m-1">
              Todo LC
              </NavLink>

              <NavLink to="/ProductAppLC" className="nav-link btn btn-outline-primary m-1">
              Product LC
              </NavLink>

            </ul>
          </div>
        </div>
      </nav>
  </div>;
};

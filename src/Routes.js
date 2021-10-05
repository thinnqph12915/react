import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";
import Add from "./add";
import Edit from "./edit";
export default function Routes(props) {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-link">
                <NavLink to="/" activeClassName="active" exact>
                  home
                </NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/product" activeClassName="active" exact>
                  Product
                </NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/product/add" activeClassName="active">
                  Add Product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/product" exact>
          <Product {...props} />
        </Route>
        <Route path="/product/add">
          <Add />
        </Route>
        <Route path="/product/edit/:id">
          <Edit onUpdate={props.onUpdate} />
        </Route>
      </Switch>
    </Router>
  );
}

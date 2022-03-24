import { NavLink } from "react-router-dom";
import "./sidemenu.css";
const SideMenu = () => {
 
  return (
    <>
      <div className="side-menu">
        <div className="logo">
            deshboat-kit
        </div>
        <ul>
          
            <li>
              <NavLink to="/overview">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/list">Tickets</NavLink>
            </li>
            <li>
              <NavLink to="/ideas">Ideas</NavLink>
            </li>
            <li>
              <NavLink to="/inventory">Inventory</NavLink>
            </li>
          
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
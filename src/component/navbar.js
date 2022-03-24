import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  let logout = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("permission");

    navigate("/");
  };
  return (
    <nav
      
    >
     
    </nav>
  );
};
export default Navbar;
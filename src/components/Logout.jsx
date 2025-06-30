
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { logout } from "../redux/slice";

const Logout = () => {
  const dispatch = useDispatch();

 //get navigate function

  const navigate = useNavigate();
  const handleLogout = () => {
// dispatch logout action and redirect to home
    dispatch(logout());      
    navigate("/");           
  };

  return (
    // button to logout
   <button
  type="button"
  onClick={handleLogout}
  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition  cursor-pointer "
>
  Logout
</button>

  );
};

export default Logout;

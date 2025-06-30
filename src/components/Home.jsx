import { useNavigate } from "react-router-dom";
import '../App.css';
import { useSelector } from "react-redux";

const Home = () => {
 const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.slice);
  //action when the button click
const handleClick = () => {
    if (isAuthenticated && student?.role === "student") {
      navigate("/student");
    } else {
      // alert when the button click and navigate to login

      navigate("/login");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-white">
       {/* image-section */}
        <div className="flex items-center justify-center">
          <img
            src="../images/home-img.png"
            alt="Student Portal"
            className="h-100 max-w-full object-contain"
          />
        </div>

      
    {/* text-section */}
         <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-extrabold">
            Student Portal:
            <br/>
             The Heart of Modern Education
          </p>
         <button>
                <a
                  onClick={handleClick}
                  className="text-white hover:bg-gray-400 bg-gray-800 cursor-pointer font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                 login
                </a>
              </button>
        </div>
      </div>
    </>
  );
};

export default Home;

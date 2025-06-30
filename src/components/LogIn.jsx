import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../redux/slice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const LogIn = () => {
  const dispatch = useDispatch();
 
  //  check the user and redirect to the specific routes
  const { isAuthenticated, user } = useSelector((state) => state.slice);
  if (isAuthenticated && user?.role === "student") {
    return <Navigate to="/student" />;
  }

const handleSubmit = (e) => {
  e.preventDefault();
  const userName = e.target.userName.value;
  const password = e.target.password.value;

  // if the student is logined otherwise
  if (userName === "student" && password === "12345") {
    dispatch(login({ userName, role: "student" }));
   <Navigate to="/student" />
   
  } else {
    alert("invalid credential");
  }
};

  return (
    <>
      <div className="login-container flex justify-center items-center h-screen">
        <div className=" flex justify-center items-center overflow-hidden w-full max-w-4xl py-15    ">
         
          <div className="w-full md:w-1/2  p-8 bg-blue-100 rounded-lg text-black   ">
            <p className="mb-7">
              Welcome! Please fill in your  details to sign into
              your account.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex items-center my-5">
                {/* form-section*/}
                <input
                  required
                  type="text"
                  name="userName"
                  placeholder="Your Name"
                  className="w-full bg-white text-black focus:outline-none placeholder-black p-2 rounded"
                />
              </div>

              <div className="flex items-center my-5">
                {/* input to the password*/}
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-white text-black  placeholder-black p-2 rounded"
                />
              </div>

               <div className="flex items-center my-5">
                {/* input to the email*/}
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="w-full bg-white text-black  placeholder-black p-2 rounded"
                />
              </div>
              {/* button to submit the form */}
              <button
            
                type="submit"
                className="bg-blue-500 cursor-pointer  text-black font-semibold px-6 py-2  hover:bg-gray-600 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
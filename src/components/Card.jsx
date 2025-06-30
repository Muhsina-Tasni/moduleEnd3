import { useNavigate } from "react-router-dom";
const Card = ({ student }) => {
  const navigate =useNavigate();

  //action when i click the button
  const handle = () => {
    navigate("/studentsportal");
  };
  //destructure
  const { name, email,id } = student;
  return (
    <>
      <div className="border-2 h-30  w-70 m-5">
        <p>id:{id}</p>
        <p>name:{name}</p>
        <p>name:{email}</p>
        <button onClick={handle} className="bg-blue-300">
          view
        </button>
      </div>
    </>
  );
};
export default Card;

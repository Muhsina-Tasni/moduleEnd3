import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const StudentDetail = () => {

const navigate = useNavigate();

  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");


//   for take the students details
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Student not found");
        return res.json();
      })
      .then((data) => setStudent(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!student) return <p className="p-4">Loading...</p>;

  return (
    <>
      <button
        onClick={() => navigate("/student")}
        className="text-center bg-blue-400"
      >
        back to list
      </button>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Student Detail</h2>
        <div className="border p-4 shadow-md">
          <p>
            <strong>ID:</strong> {student.id}
          </p>
          <p>
            <strong>Name:</strong> {student.name}
          </p>
          <p>
            <strong>Email:</strong> {student.email}
          </p>
          <p>
            <strong>Username:</strong> {student.username}
          </p>
          <p>
            <strong>Phone:</strong> {student.phone}
          </p>
          <p>
            <strong>Website:</strong> {student.website}
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentDetail;

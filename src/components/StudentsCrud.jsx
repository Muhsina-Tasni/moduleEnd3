import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
const StudentsCrud = () => {
  const location = useLocation();
  const initialStudent = location.state?.student;
const navigate = useNavigate();



  const [students, setStudents] = useState(initialStudent ? [initialStudent] : []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // for add students
  const handleAdd = () => {
    if (!name || !email) {
      alert("Please enter both name and email");
      return;
    }

    const newStudent = {
      id: Date.now(), 
      name,
      email,
    };

    setStudents([...students, newStudent]);
    setName("");
    setEmail("");
  };

  // Handle Delete
  const handleDelete = (id) => {
    setStudents(students.filter((stu) => stu.id !== id));
  };

  return (
    <div className="p-6">
{/* button for back to the list page */}
<button
        onClick={() => navigate("/student")}
        className="text-center bg-blue-400"
      >
        back to list
      </button>

      <h2 className="text-2xl font-bold mb-4">Students Portal</h2>

      {/* Form */}
      <div className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
    
 <input
                  required
                  type="email"
                  id="email"
                  name="email"
                   value={email}
          onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="border p-2 mr-2"
                />



        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2">
          Create
        </button>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((stu) => (
          <div key={stu.id} className="border p-4 shadow-md">
            <p><strong>Name:</strong> {stu.name}</p>
            <p><strong>Email:</strong> {stu.email}</p>
            {/* button for delete */}
            <button
              onClick={() => handleDelete(stu.id)}
              className="bg-red-500 text-white px-3 py-1 mt-3"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsCrud;

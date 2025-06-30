
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/Searchbar";


const StudentData = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();


  // fetch the api with useeffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSearchSubmit = () => {
    const id = parseInt(searchTerm);
    if (!isNaN(id)) {
      navigate(`/student/${id}`);
    } else {
      alert("Enter a valid numeric ID.");
    }
  };

  return (
    <>
    {/* searchbar component */}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
      />
      {/* logout component */}
      <Logout />
      <h2 className="text-center font-bold text-3xl mt-4">Student List</h2>
      <div>
        {data.map((student) => (
          // card component
          <Card key={student.id} student={student} />
        ))}
      </div>
    </>
  );
};

export default StudentData;

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit, onClearSearch }) => {

  // onkeydown
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchSubmit(); 
    }
  };

  return (
    <div className="text-center my-4">
      <input
        name="searched"
        type="text"
        placeholder="Search by student ID..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={handleKeyDown} 
        className="p-2 w-1/2 border-2 border-blue-800 focus:outline-none focus:ring rounded-2xl"
      />
      
      {/* Search Button */}
      <button
        onClick={onSearchSubmit}
        className="ml-3 px-4 py-1 bg-green-600 text-white rounded-3xl hover:bg-green-800"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

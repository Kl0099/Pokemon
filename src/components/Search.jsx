import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4"
      />
    </>
  );
};

export default Search;

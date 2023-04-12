import { useState } from "react";

const Search = ({ setQuotePath }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuotePath(
      `random/${searchType}?${
        searchType === "character" ? "name" : "title"
      }=${searchTerm}`
    );
  };

  return (
    <div className="search">
      <input
        type="radio"
        id="character"
        name="searchType"
        value="character"
        checked={searchType === "character"}
        onChange={(event) => setSearchType(event.target.value)}
      />
      <label id="label-character" htmlFor="character">
        Character
      </label>

      <input
        type="radio"
        id="anime"
        name="searchType"
        value="anime"
        checked={searchType === "anime"}
        onChange={(event) => setSearchType(event.target.value)}
      />
      <label id="label-anime" htmlFor="anime">
        Anime
      </label>

      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder={`Search by ${searchType}`}
          value={searchTerm}
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;

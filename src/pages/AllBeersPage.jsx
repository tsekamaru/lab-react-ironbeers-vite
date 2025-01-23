import { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "../components/beerCard";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://ih-beers-api2.herokuapp.com/beers")
  //     .then((response) => {
  //       setBeers(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log("fetching error", error));
  // }, []);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log("fetching error", error));
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container-md mt-3">
      <div className="container-fluid d-flex justify-content-center">
        <div className="input-group mb-4" style={{ maxWidth: "20rem" }}>
          <span
            className="input-group-text text-white bg-dark border-bottom border-body"
            data-bs-theme="dark"
            id="searchBar"
          >
            Search
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Beers by their Names"
            value={query}
            onChange={handleChange}
          />
        </div>
      </div>

      {beers.map((beer) => (
        <BeerCard key={beer._id} beer={beer} />
      ))}
    </div>
  );
}

export default AllBeersPage;

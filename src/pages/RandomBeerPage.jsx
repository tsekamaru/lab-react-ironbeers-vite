import { useState, useEffect } from "react";
import axios from "axios";
import BeerDetailsCard from "../components/BeerDetailsCard";

function RandomBeersPage() {
  const [beer, setBeer] = useState({});

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => setBeer(response.data))
      .catch((error) => console.log("Fetching error", error));
  }, []);

  return <BeerDetailsCard beer={beer} />;
}

export default RandomBeersPage;

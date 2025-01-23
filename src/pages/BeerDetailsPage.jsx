import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BeerDetailsCard from "../components/BeerDetailsCard";

function BeerDetailsPage() {
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => setBeer(response.data))
      .catch((error) => console.log("Fetching error", error));
  }, [beerId]);

  return <BeerDetailsCard beer={beer} />;
}

export default BeerDetailsPage;

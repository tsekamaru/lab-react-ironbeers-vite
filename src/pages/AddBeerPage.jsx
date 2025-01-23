/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddBeerPage() {
  const [beer, setBeer] = useState({
    _id: "",
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeer({ ...beer, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add a new unique _id when submitting the form
    setBeer({ ...beer, _id: uuidv4() });

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
      .then((response) => {
        console.log(response.data.message);

        setBeer({
          _id: "",
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: "",
          contributed_by: "",
        });

        // navigate("/beers")
      })
      .catch((error) => console.log(error));

    console.log(beer);
  };

  function handleFocus(event) {
    if (!event.target.value) event.target.placeholder = "MM/YYYY";
  }

  function handleBlur(event) {
    event.target.placeholder = "";
  }

  return (
    <form className="d-flex flex-column container-fluid mt-3" onSubmit={handleFormSubmit}>
      <div className="form-floating">
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={beer.name}
          placeholder=""
          onChange={handleChange}
        />
        <label className="form-label fw-semibold" htmlFor="name">
          Name:
        </label>
      </div>
      <br />

      <div className="form-floating">
        <input
          className="form-control"
          type="text"
          name="tagline"
          id="tagline"
          value={beer.tagline}
          placeholder=""
          onChange={handleChange}
        />
        <label className="form-label fw-semibold" htmlFor="tagline">
          Tagline:
        </label>
      </div>
      <br />

      <div className="form-floating">
        <textarea
          style={{ height: "10rem" }}
          className="form-control"
          rows={3}
          type="text"
          name="description"
          id="description"
          value={beer.description}
          placeholder=""
          onChange={handleChange}
        />
        <label className="form-label fw-semibold" htmlFor="description">
          Description:
        </label>
      </div>
      <br />

      <div className="form-floating">
        <input
          className="form-control"
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={beer.first_brewed}
          placeholder=""
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label className="form-label fw-semibold" htmlFor="first_brewed">
          First Brewed:
        </label>
      </div>
      <br />

      <div className="form-floating">
        <input
          className="form-control"
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={beer.brewers_tips}
          placeholder=""
          onChange={handleChange}
        />
        <label className="form-label fw-semibold" htmlFor="brewers_tips">
          Brewer Tips:
        </label>
      </div>
      <br />

      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-percent"></i>
        </span>
        <div className="form-floating">
          <input
            className="form-control"
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            value={beer.attenuation_level}
            placeholder=""
            onChange={handleChange}
          />
          <label className="form-label fw-semibold" htmlFor="attenuation_level">
            Attenuation level:
          </label>
        </div>
      </div>
      <br />

      <div className="form-floating">
        <input
          className="form-control"
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={beer.contributed_by}
          placeholder=""
          onChange={handleChange}
        />
        <label className="form-label fw-semibold" htmlFor="contributed_by">
          Created By:
        </label>
      </div>
      <br />

      <div>
        <button className="btn btn-primary fw-semibold">Add beer</button>
      </div>
      <br />
    </form>
  );
}

export default AddBeerPage;

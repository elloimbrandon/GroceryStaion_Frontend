import "../App.css";
import { useState } from "react";

const EditSandwich = (props) => {
  const [sandwich, setSandwich] = useState({ ...props.sandwichCard });

  const handleChange = (event) => {
    setSandwich({ ...sandwich, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    props.handleUpdate(sandwich);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="priceFull">
          Full-Sandwich: $
          <input
            type="number"
            step="0.01"
            name="priceFull"
            placeholder={sandwich.priceFull.$numberDecimal}
            value={sandwich.priceFull}
            onChange={handleChange}
            autoCorrect="off"
          />
        </label>
        <br />
        <label htmlFor="subject">
          Half-Sandwich: $
          <input
            type="number"
            step="0.01"
            name="priceHalf"
            placeholder={sandwich.priceHalf.$numberDecimal}
            value={sandwich.priceHalf}
            onChange={handleChange}
            autoCorrect="off"
          />
        </label>
        <br />
        <input
          className="btn border mt-2"
          type="submit"
          value="Submit Changes"
        />
      </form>
      <br />
    </>
  );
};

export default EditSandwich;

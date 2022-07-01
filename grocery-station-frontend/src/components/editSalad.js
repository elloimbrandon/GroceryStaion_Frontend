import "../App.css";
import { useState } from "react";

const EditSalad = (props) => {
  const [salad, setSalad] = useState({ ...props.saladCard });

  const handleChange = (event) => {
    setSalad({ ...salad, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    props.handleUpdate(salad);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="price">
          Price: $
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder={salad.price.$numberDecimal}
            value={salad.price}
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

export default EditSalad;

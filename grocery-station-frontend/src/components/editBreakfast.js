import "../App.css";
import { useState } from "react";

const EditBreakfast = (props) => {
  const [breakfast, setBreakfast] = useState({ ...props.breakfastCard });
  console.log(breakfast);

  const handleChange = (event) => {
    setBreakfast({ ...breakfast, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    props.handleUpdate(breakfast);
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
            placeholder={breakfast.price.$numberDecimal}
            value={breakfast.price}
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

export default EditBreakfast;

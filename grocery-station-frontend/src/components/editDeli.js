import "../App.css";
import { useState } from "react";

const EditDeli = (props) => {
  const [deliItem, setDeliItem] = useState({ ...props.deliCard });

  const handleChange = (event) => {
    setDeliItem({ ...deliItem, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    props.handleUpdate(deliItem);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="price">
          Price per lb: $
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder={deliItem.price.$numberDecimal}
            value={deliItem.priceFull}
            onChange={handleChange}
            autoCorrect="off"
          />
        </label>
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

export default EditDeli;

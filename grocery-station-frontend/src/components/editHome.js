import "../App.css";
import { useState } from "react";

const EditHome = (props) => {
  const [updates, setUpdates] = useState({ ...props.updatesCard });

  const handleChange = (event) => {
    setUpdates({ ...updates, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    props.handleUpdate(updates);
  };

  return (
    <div className="container text-xl mt-2 flex flex-column border border-dark rounded w-full">
      <form className="p-1" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title: {""}
          <input
            className="bg-indigo-100 w-full"
            type="text"
            name="title"
            placeholder={updates.title}
            value={updates.title}
            onChange={handleChange}
            autoCorrect="off"
          />
        </label>
        <br />
        <label htmlFor="description">
          Description: {""}
          <input
            className="bg-indigo-100 w-full"
            type="text"
            name="description"
            placeholder={updates.description}
            value={updates.description}
            onChange={handleChange}
            autoCorrect="off"
          />
        </label>
        <br />
        <input
          className="btn border border-dark mt-2"
          type="submit"
          value="Submit Changes"
        />
      </form>
      <br />
    </div>
  );
};

export default EditHome;

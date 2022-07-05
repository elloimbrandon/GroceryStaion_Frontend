import "../App.css";
import { useState, useEffect } from "react";
import EditSalad from "../components/editSalad";
import axios from "axios";
import Menu from "./menu";

const Salads = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  const [saladCards, setSaladCards] = useState([]);

  const getSalads = () => {
    axios
      .get("https://grocery-station-backend.herokuapp.com/salads")
      .then((response) => {
        console.log(response.data);
        setSaladCards(response.data);
      });
  };

  const handleUpdate = (item) => {
    axios
      .put(`https://grocery-station-backend.herokuapp.com/salads/${item._id}`, {
        price: item.price,
      })
      .then((response) => {
        console.log(response.data.price);
        getSalads();
        alert("Updates applied!");
      })
      .catch((err) => {
        alert("Invalid updates..");
      });
  };

  useEffect(() => {
    getSalads();
  }, []);

  return (
    <>
      <Menu />
      <div>
        <h1 className="display-6 w-1/2 container border-b flex justify-content-center text-center border-dark">
          Salads
        </h1>
        <div className="container h-full pb-4 w-full flex flex-row flex-wrap">
          {saladCards.map((saladCard, index) => {
            return (
              <div className="flex p-2 lg:w-1/2 md:w-1/2 sm:w-full" key={index}>
                <div className="w-1/2 flex flex-col">
                  <img
                    className="w-full h-full rounded-l-xl"
                    src={saladCard.image}
                    alt="salad"
                  />
                </div>
                <div className="container flex flex-col bg-soft-grey rounded-r-xl w-full">
                  <div>
                    <h1 className="container flex flex-row justify-content-center text-3xl border-bottom border-dark font-extrabold p-1 m-1">
                      {saladCard.itemName}
                    </h1>
                  </div>
                  <p className="text-xl container">{saladCard.description}</p>
                  {!user ? (
                    <div className="container mt-1 mb-1 ">
                      <p className="pl-2 text-xl border border-dark rounded">
                        Price: ${saladCard.price.$numberDecimal}
                      </p>
                    </div>
                  ) : (
                    <div className="container flex flex-col border border-dark mb-2">
                      <EditSalad
                        saladCard={saladCard}
                        handleUpdate={handleUpdate}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Salads;

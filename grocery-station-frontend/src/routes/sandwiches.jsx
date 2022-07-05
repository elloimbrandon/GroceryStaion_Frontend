import "../App.css";
import { useState, useEffect } from "react";
import EditSandwich from "../components/editSandwich";
import axios from "axios";
import Menu from "./menu";
// import { Outlet, NavLink } from "react-router-dom";

const Sandwiches = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  const [sandwichCards, setSandwichCards] = useState([]);

  const getSandwiches = () => {
    axios
      .get("https://grocery-station-backend.herokuapp.com/sandwiches")
      .then((response) => {
        setSandwichCards(response.data);
      });
  };

  const handleUpdate = (item) => {
    axios
      .put(
        `https://grocery-station-backend.herokuapp.com/sandwiches/${item._id}`,
        {
          priceFull: item.priceFull,
          priceHalf: item.priceHalf,
        }
      )
      .then((response) => {
        console.log(response.data.priceFull);
        getSandwiches();
        alert("Updates applied!");
      })
      .catch((err) => {
        alert("Invalid updates..");
      });
  };

  useEffect(() => {
    getSandwiches();
  }, []);

  return (
    <>
      <Menu />
      <div>
        <h1 className="display-6 w-1/2 container border-b flex justify-content-center text-center border-dark ">
          Sandwiches
        </h1>
        <p className="text-center text-xl p-1">
          (Make a sandwich order into a meal with chips, drink and a side of
          macaroni salad, potato salad, or coleslaw for 2.49!)
        </p>
        <div className="container h-full w-full flex flex-row flex-wrap">
          {sandwichCards.map((sandwichCard, index) => {
            return (
              <div className="flex p-2 lg:w-1/2 md:w-1/2 sm:w-full" key={index}>
                <div className="w-1/2 flex flex-col">
                  <img
                    className="w-full h-full rounded-l-xl"
                    src={sandwichCard.image}
                    alt="sandwich"
                  />
                </div>
                <div className="container flex flex-col bg-soft-grey rounded-r-xl w-full ">
                  <div>
                    <h1 className="container flex flex-row justify-content-center text-3xl border-bottom border-dark font-extrabold p-1 m-1">
                      {sandwichCard.itemName}
                    </h1>
                  </div>
                  <p className="container text-xl">
                    {sandwichCard.description}
                  </p>
                  {!user ? (
                    <div className="mt-2 mb-2 container rounded border border-dark">
                      <p className="text-xl">
                        Full Sandwich: ${sandwichCard.priceFull.$numberDecimal}
                      </p>
                      <p className="text-xl">
                        Half Sandwich: ${sandwichCard.priceHalf.$numberDecimal}
                      </p>
                    </div>
                  ) : (
                    <div className="container flex flex-col border border-t border-dark mb-2">
                      <EditSandwich
                        sandwichCard={sandwichCard}
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

export default Sandwiches;

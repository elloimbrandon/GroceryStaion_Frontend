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
    axios.get("http://localhost:3000/sandwiches").then((response) => {
      setSandwichCards(response.data);
    });
  };

  const handleUpdate = (item) => {
    axios
      .put(`http://localhost:3000/sandwiches/${item._id}`, {
        priceFull: item.priceFull,
        priceHalf: item.priceHalf,
      })
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
        <h1 class="display-6 text-center underline">Sandwiches</h1>
        <div className="overflow-scroll pb-56 h-screen w-auto flex flex-row flex-wrap">
          {sandwichCards.map((sandwichCard, index) => {
            return (
              <div
                className="pt-4 flex lg:w-1/2 md:w-1/2 sm:w-full"
                key={index}
              >
                <div className="container mx-auto flex flex-row w-full">
                  <div className="w-full mx-auto flex flex-col">
                    <img
                      className="w-full h-full rounded-l-xl"
                      src={sandwichCard.image}
                      alt="sandwich"
                    />
                  </div>
                  <div className="container flex flex-col bg-indigo-50 rounded-r-xl w-full h-auto mx-auto">
                    <div>
                      <h1 className="container flex flex-row justify-content-center text-3xl underline p-3">
                        {sandwichCard.itemName}
                      </h1>
                    </div>
                    <p className="text-xl pb-20">{sandwichCard.description}</p>
                    {!user ? (
                      <>
                        <p className="text-2xl border-t border-black pt-5">
                          Full Sandwich: $
                          {sandwichCard.priceFull.$numberDecimal}
                        </p>
                        <p className="text-2xl">
                          Half Sandwich: $
                          {sandwichCard.priceHalf.$numberDecimal}
                        </p>
                      </>
                    ) : (
                      <div className="border-t border-black pt-1">
                        <EditSandwich
                          sandwichCard={sandwichCard}
                          handleUpdate={handleUpdate}
                        />
                      </div>
                    )}
                  </div>
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

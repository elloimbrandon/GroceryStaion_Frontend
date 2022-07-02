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
        {/* keep an eye on padding */}
        <div className="container overflow-scroll pb-48 h-screen w-full flex flex-row flex-wrap">
          {sandwichCards.map((sandwichCard, index) => {
            return (
              <div className="flex p-2 lg:w-1/2 md:w-1/2 sm:w-full" key={index}>
                {/* <div className="border container flex flex-row w-full"> */}
                <div className="w-1/2 h-1/2 flex flex-col">
                  <img
                    className="w-full rounded-l-xl"
                    src={sandwichCard.image}
                    alt="sandwich"
                  />
                </div>
                <div className="container flex flex-col bg-indigo-50 rounded-r-xl w-full ">
                  <div>
                    <h1 className="container flex flex-row justify-content-center text-3xl underline p-3">
                      {sandwichCard.itemName}
                    </h1>
                  </div>
                  <p className="text">{sandwichCard.description}</p>
                  {!user ? (
                    <>
                      <p className="text-l border-t border-black pt-2">
                        Full Sandwich: ${sandwichCard.priceFull.$numberDecimal}
                      </p>
                      <p className="text-l">
                        Half Sandwich: ${sandwichCard.priceHalf.$numberDecimal}
                      </p>
                    </>
                  ) : (
                    <div className="container flex flex-col border border-t border-black">
                      <EditSandwich
                        sandwichCard={sandwichCard}
                        handleUpdate={handleUpdate}
                      />
                    </div>
                  )}
                </div>
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sandwiches;

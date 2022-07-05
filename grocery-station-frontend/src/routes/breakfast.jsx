import "../App.css";
import { useState, useEffect } from "react";
import EditBreakfast from "../components/editBreakfast";
import axios from "axios";
import Menu from "./menu";
// import { Outlet, NavLink } from "react-router-dom";

const Breakfast = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  const [breakfastCards, setBreakfastCards] = useState([]);

  const getBreakfast = () => {
    axios
      .get("https://grocery-station-backend.herokuapp.com/breakfast")
      .then((response) => {
        setBreakfastCards(response.data);
      });
  };

  const handleUpdate = (item) => {
    axios
      .put(
        `https://grocery-station-backend.herokuapp.com/breakfast/${item._id}`,
        {
          price: item.price,
        }
      )
      .then((response) => {
        getBreakfast();
        alert("Updates applied!");
      })
      .catch((err) => {
        alert("Invalid updates..");
      });
  };

  useEffect(() => {
    getBreakfast();
  }, []);

  return (
    <>
      <Menu />
      <div>
        <h1 class="display-6 w-1/2 container border-b flex justify-content-center text-center border-dark">
          Breakfast
        </h1>
        <h1 className="text-center p-1 text-2xl">(Served all day!)</h1>
        <div className="container h-full pb-4 w-full flex flex-row flex-wrap">
          {breakfastCards.map((breakfastCard, index) => {
            return (
              <div className="flex p-2 lg:w-1/2 md:w-1/2 sm:w-full" key={index}>
                <div className="w-1/2 flex flex-col">
                  <img
                    className="w-full h-full rounded-l-xl"
                    src={breakfastCard.image}
                    alt="breakfast"
                  />
                </div>
                <div className="container flex flex-col bg-soft-grey rounded-r-xl w-full">
                  <div>
                    <h1
                      className="container flex flex-row justify-content-center
                    border-bottom border-dark font-extrabold text-3xl p-1"
                    >
                      {breakfastCard.itemName}
                    </h1>
                  </div>
                  <p className="text-xl container">
                    {breakfastCard.description}
                  </p>
                  {!user ? (
                    <div className="mt-2 mb-2 container">
                      <p className="pl-2 border border-dark rounded text-xl border-t border-black pt-1">
                        Sandwich: ${breakfastCard.price.$numberDecimal}
                      </p>
                    </div>
                  ) : (
                    <div className="container flex flex-col border border-dark pt-1">
                      <EditBreakfast
                        breakfastCard={breakfastCard}
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

export default Breakfast;

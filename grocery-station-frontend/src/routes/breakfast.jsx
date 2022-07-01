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
    axios.get("http://localhost:3000/breakfast").then((response) => {
      setBreakfastCards(response.data);
    });
  };

  const handleUpdate = (item) => {
    axios
      .put(`http://localhost:3000/breakfast/${item._id}`, {
        price: item.price,
      })
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
        <h1 class="display-6 text-center underline">Breakfast</h1>
        <div className="overflow-scroll pb-56 h-screen w-auto flex flex-row flex-wrap">
          {breakfastCards.map((breakfastCard, index) => {
            return (
              <div
                className="pt-4 flex lg:w-1/2 md:w-1/2 sm:w-full"
                key={index}
              >
                <div className="container mx-auto flex flex-row w-full">
                  <div className="w-full mx-auto flex flex-col">
                    <img
                      className="w-full h-full rounded-l-xl"
                      src={breakfastCard.image}
                      alt="breakfast"
                    />
                  </div>
                  <div className="container flex flex-col bg-indigo-50 rounded-r-xl w-full h-auto mx-auto">
                    <div>
                      <h1 className="container flex flex-row justify-content-center text-3xl underline p-3">
                        {breakfastCard.itemName}
                      </h1>
                    </div>
                    <p className="text-xl pb-20">{breakfastCard.description}</p>
                    {!user ? (
                      <>
                        <p className="text-2xl border-t border-black pt-5">
                          Sandwich: ${breakfastCard.price.$numberDecimal}
                        </p>
                      </>
                    ) : (
                      <div className="border-t border-black pt-1">
                        <EditBreakfast
                          breakfastCard={breakfastCard}
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

export default Breakfast;

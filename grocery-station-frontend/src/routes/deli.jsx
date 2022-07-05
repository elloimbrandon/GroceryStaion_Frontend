import "../App.css";
import { useState, useEffect } from "react";
import EditDeli from "../components/editDeli";
import axios from "axios";
import Menu from "./menu";

const Deli = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  const [deliCards, setDeliCards] = useState([]);

  const getDeliItems = () => {
    axios
      .get("https://grocery-station-backend.herokuapp.com/coldcutscheese")
      .then((response) => {
        console.log(response.data);
        setDeliCards(response.data);
      });
  };

  const handleUpdate = (item) => {
    axios
      .put(
        `https://grocery-station-backend.herokuapp.com/coldcutscheese/${item._id}`,
        {
          price: item.price,
        }
      )
      .then((response) => {
        console.log(response.data.price);
        getDeliItems();
        alert("Updates applied!");
      })
      .catch((err) => {
        alert("Invalid updates..");
      });
  };

  useEffect(() => {
    getDeliItems();
  }, []);

  return (
    <>
      <Menu />
      <div>
        <h1 class="display-6 w-1/2 container border-b flex justify-content-center text-center border-dark">
          Meat & Cheeses
        </h1>
        <div className="container h-full pb-4 w-full flex flex-row flex-wrap">
          {deliCards.map((deliCard, index) => {
            return (
              <div className="p-2 flex lg:w-1/2 md:w-1/2 sm:w-full" key={index}>
                <div className="w-1/2 flex flex-col">
                  <img
                    className="w-full h-full rounded-l-xl"
                    src={deliCard.image}
                    alt="salad"
                  />
                </div>
                <div className="container flex flex-col bg-soft-grey rounded-r-xl w-full border-l border-dark">
                  <div>
                    <h1 className="container flex flex-row justify-content-center text-3xl border-bottom border-dark font-extrabold p-1 mb-3">
                      {deliCard.itemName}
                    </h1>
                  </div>
                  {!user ? (
                    <div className="container mt-1 mb-1">
                      <p className="pl-2 text-xl border border-dark rounded">
                        Price per lb: ${deliCard.price.$numberDecimal}
                      </p>
                    </div>
                  ) : (
                    <div className="container border border-dark mb-2 pt-1">
                      <EditDeli
                        deliCard={deliCard}
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

export default Deli;

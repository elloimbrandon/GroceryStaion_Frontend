import "../App.css";
import { useState, useEffect } from "react";
import EditDeli from "../components/editDeli";
import axios from "axios";
import Menu from "./menu";

const Deli = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  const [deliCards, setDeliCards] = useState([]);

  const getDeliItems = () => {
    axios.get("http://localhost:3000/coldcutscheese").then((response) => {
      console.log(response.data);
      setDeliCards(response.data);
    });
  };

  const handleUpdate = (item) => {
    axios
      .put(`http://localhost:3000/coldcutscheese/${item._id}`, {
        price: item.price,
      })
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
        <h1 className="display-6 text-center underline">Meat & Cheeses</h1>
        <div className="overflow-scroll pb-56 h-screen w-auto flex flex-row flex-wrap">
          {deliCards.map((deliCard, index) => {
            return (
              <div
                className="pt-4 flex lg:w-1/2 md:w-1/2 sm:w-full"
                key={index}
              >
                <div className="container mx-auto flex flex-row w-full">
                  <div className="w-full mx-auto flex flex-col">
                    <img
                      className="w-full h-full rounded-l-xl"
                      src={deliCard.image}
                      alt="salad"
                    />
                  </div>
                  <div className="container flex flex-col bg-indigo-50 rounded-r-xl w-full h-auto mx-auto">
                    <div>
                      <h1 className="container flex flex-row justify-content-center text-3xl underline p-3">
                        {deliCard.itemName}
                      </h1>
                    </div>
                    {!user ? (
                      <>
                        <p className="text-2xl border-t border-black pt-5">
                          Price per lb: ${deliCard.price.$numberDecimal}
                        </p>
                      </>
                    ) : (
                      <div className="border-t border-black pt-1">
                        <EditDeli
                          deliCard={deliCard}
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

export default Deli;

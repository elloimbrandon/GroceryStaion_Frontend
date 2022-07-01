import "../App.css";
import { useState, useEffect } from "react";
import Edit from "../components/editSalad";
import axios from "axios";
import Menu from "./menu";

const Salads = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  const [saladCards, setSaladCards] = useState([]);

  const getSalads = () => {
    axios.get("http://localhost:3000/salads").then((response) => {
      console.log(response.data);
      setSaladCards(response.data);
    });
  };

  const handleUpdate = (item) => {
    axios
      .put(`http://localhost:3000/salads/${item._id}`, {
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
        <h1 class="display-6 text-center underline">Salads</h1>
        <div className="overflow-scroll pb-56 h-screen w-auto flex flex-row flex-wrap">
          {saladCards.map((saladCard, index) => {
            return (
              <div
                className="pt-4 flex lg:w-1/2 md:w-1/2 sm:w-full"
                key={index}
              >
                <div className="container mx-auto flex flex-row w-full">
                  <div className="w-full mx-auto flex flex-col">
                    <img
                      className="w-full h-full rounded-l-xl"
                      src={saladCard.image}
                      alt="salad"
                    />
                  </div>
                  <div className="container flex flex-col bg-indigo-50 rounded-r-xl w-full h-auto mx-auto">
                    <div>
                      <h1 className="container flex flex-row justify-content-center text-3xl underline p-3">
                        {saladCard.itemName}
                      </h1>
                    </div>
                    <p className="text-xl pb-20">{saladCard.description}</p>
                    {!user ? (
                      <>
                        <p className="text-2xl border-t border-black pt-5">
                          Price: ${saladCard.price.$numberDecimal}
                        </p>
                      </>
                    ) : (
                      <div className="border-t border-black pt-1">
                        <Edit
                          saladCard={saladCard}
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

export default Salads;

// import "../App.css";
// // import { Outlet, NavLink } from "react-router-dom";
// import Menu from "./menu";

// const Salads = () => {
//   return (
//     <div>
//       <div>
//         <Menu />
//       </div>
//       <div className="menu-title">
//         <h1>Salads</h1>
//       </div>
//       <h1>
//         <u>Salads</u>
//       </h1>
//       <ul>
//         <li>Garden Salad</li>
//         <li>Club Salad</li>
//       </ul>
//     </div>
//   );
// };

// export default Salads;

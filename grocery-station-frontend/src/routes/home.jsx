import { useState, useEffect } from "react";
import HomeCarousel from "../components/homeCarousel";
import axios from "axios";
import EditHome from "../components/editHome";

import Nav from "../components/nav";

import "../App.css";

const Home = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  const [updates, setUpdates] = useState([]);

  const getUpdates = () => {
    axios.get("http://localhost:3000/home").then((response) => {
      setUpdates(response.data);
    });
  };

  const handleUpdate = (item) => {
    axios
      .put(`http://localhost:3000/home/${item._id}`, {
        lastActiveAt: new Date(),
        title: item.title,
        description: item.description,
      })
      .then((response) => {
        getUpdates();
        alert("Updates applied!");
      })
      .catch((err) => {
        alert("Invalid updates..");
      });
  };

  const handleDate = (input) => {
    let date = new Date(input);
    return date.toDateString();
  };

  useEffect(() => {
    getUpdates();
  }, []);

  return (
    <>
      {/* { <Home />} */}
      <div className="w-68 container flex flex-col justify-content-center">
        <h3 className="w-auto mt-2 text-3xl container flex justify-content-center home-quote border-dark ">
          Serving the valley delicious sandwiches since 2005!
        </h3>
        <div className="container flex flex-row pb-3">
          {updates.map((update, index) => {
            return (
              <>
                {!user ? (
                  <div
                    className="w-full container flex flex-col justify-content-center"
                    key={index}
                  >
                    <h1 className="mt-2 display-6 w-auto container flex justify-content-center border-bottom border-dark">
                      {update.title}
                    </h1>
                    <div className="mt-2  rounded w-full container flex flex-col justify-content-center">
                      {/* current soup */}
                      <p className="text-2xl container w-1/2 border border-dark rounded mb-2 flex justify-content-center">
                        {update.description}
                      </p>
                      <p className="text-l w-auto flex justify-content-center">
                        * Updated On: {handleDate(update.lastActiveAt)} *
                      </p>
                      <img
                        className="container w-1/2 mt-3"
                        src="https://upload.wikimedia.org/wikipedia/en/3/3a/Boar%27s_Head_logo.png"
                        alt="Boar's Head"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <EditHome
                      updatesCard={update}
                      handleUpdate={handleUpdate}
                    />
                  </>
                )}
              </>
            );
          })}
          <HomeCarousel />
        </div>
        <h3 className="border-bottom border-dark mt-4 text-2xl w-auto container flex justify-content-center">
          Open Mon-Fri | 7am - 9pm | Sunday 8am - 8pm
        </h3>
        <h3 className="w-auto text-2xl container flex justify-content-center">
          Tell: 480-860-6838
        </h3>
      </div>
    </>
  );
};

export default Home;

// graveyard testing

// const [test, setTest] = useState();
// const [testB, setTestB] = useState(false)

// <button onClick={() => {
//     if (testB == false) { setTest("Testing..."); setTestB(true) }
//     else { setTest("its working.."); setTestB(false) }
//     }
// }> Click Me! </button>
//     <p>{test}</p>

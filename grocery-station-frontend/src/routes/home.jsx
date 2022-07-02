import { useState, useEffect } from "react";
import HomeCarousel from "../components/homeCarousel";
import axios from "axios";
import EditHome from "../components/editHome";

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
    <div className="border w-68 overflow-scroll container flex flex-col justify-content-center">
      <h3 className="border w-auto container flex justify-content-center">
        10810 E. Via Linda, Scottsdale, AZ, 85259
      </h3>
      <h3 className="border w-auto container flex justify-content-center">
        Serving the valley delicious sandwiches since 2005!
      </h3>
      <div className="border w-auto container flex justify-content-center">
        <img
          className="container w-1/2"
          src="https://upload.wikimedia.org/wikipedia/en/3/3a/Boar%27s_Head_logo.png"
          alt="Boar's Head"
        />
      </div>
      {updates.map((update, index) => {
        return (
          <>
            {!user ? (
              <div key={index}>
                <h1 className="text-2xl underline w-auto container flex justify-content-center">
                  {update.title}
                </h1>
                <div className="mt-1 border bg-indigo-50 rounded w-1/2 container flex flex-col justify-content-center">
                  {/* current soup */}
                  <p className="container w-auto border flex justify-content-center">
                    Updated On: {handleDate(update.lastActiveAt)}
                  </p>
                  <p className="container w-auto border flex justify-content-center">
                    {update.description}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <EditHome updatesCard={update} handleUpdate={handleUpdate} />
              </>
            )}
          </>
        );
      })}
      <HomeCarousel />
      <h3 className="border w-auto container flex justify-content-center">
        Open Mon-Fri 7am - 9pm | Sunday 8am - 8pm
      </h3>
      <h3 className="border w-auto container flex justify-content-center">
        Tell: 480-860-6838
      </h3>
    </div>
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

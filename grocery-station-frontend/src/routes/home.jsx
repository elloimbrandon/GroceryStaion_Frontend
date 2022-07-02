import { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";

const Home = () => {
  const [updates, setUpdates] = useState([]);

  const getUpdates = () => {
    axios.get("http://localhost:3000/home").then((response) => {
      setUpdates(response.data);
    });
  };

  useEffect(() => {
    getUpdates();
  }, []);

  return (
    <div className="border container flex justify-content-center">
      {updates.map((update, index) => {
        return (
          <div key={index}>
            <p className="border container flex justify-content-center">
              {update.title}
            </p>
            {/* current soup */}
            <p>{update.description}</p>
          </div>
        );
      })}
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

import { useState, useEffect } from "react"
import "../App.css";

const Home = () => {
    return (
        <div>
          <h1>Updates</h1>
          <ul>
              <li>
                  - soup
              </li>
              <li>
                  - specials
              </li>
          </ul>
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
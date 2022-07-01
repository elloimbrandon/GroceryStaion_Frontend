import "../App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Admin = () => {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user")) || ""
  );

  const [userEmail, setUserEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loggedIn, SetLoggedIn] = useState(false);
  const navigate = useNavigate();

  const LoginModal = () => {
    return (
      <>
        <Modal size="sm" show aria-labelledby="example-modal-sizes-title-sm">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Welcome {user}!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You now have access to edit parts of the web page!
          </Modal.Body>
          <div className="flex-modal-user">
            <button
              onClick={() => {
                navigate("/home");
              }}
              class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Home
            </button>
            <button
              onClick={handleSignOut}
              className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Logout
            </button>
          </div>
        </Modal>
      </>
    );
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/users/login";
    axios
      .post(url, {
        email: userEmail,
        password: pwd,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        window.localStorage.setItem(
          "user",
          JSON.stringify(response.data.user.name)
        );
        setUser(response.data.user.name);
        SetLoggedIn(true);
      })
      .catch((error) => {
        if (error.response) {
          alert("Invalid email or password! Try again..");
        }
      });
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    SetLoggedIn(false);
    setUserEmail("");
    setPwd("");
    alert("You have logged out!");
    navigate("/admin");
  };

  // check token logic for login and page change

  return (
    <>
      {localStorage.getItem("token") || loggedIn ? (
        <div>
          <LoginModal user={user} />
        </div>
      ) : (
        <div className="flex-admin-login-container">
          <h1>Admin Login</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col h-4/5 w-2/5">
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="Email"
                >
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  type="text"
                  id="userEmail"
                  autoComplete="off"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  value={userEmail}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                  value={pwd}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
                  Sign In
                </button>
                <p className="inline-block align-baseline font-bold text-sm text-blue">
                  Forgot Password? <br />- Contact Brandon -
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;

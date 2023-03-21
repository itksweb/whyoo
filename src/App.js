import Login from "./components/Login";
import Resgiter from "./components/Resgister";
import Wrapper from "./components/Wrapper";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(false);
  const [usersCount, setUsersCount] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  const fetchUserCount = () => {
    fetch(
      "https://react-test-project-2e525-default-rtdb.firebaseio.com/users.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let leng = Object.keys(data).length;
        console.log("length " + leng);
        setUsersCount(leng);
      });
  };
  const postUserData = (userData) => {
    fetch(
      "https://react-test-project-2e525-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-Type": "application/json" },
      }
    ).then(() => {
      console.log("done");
    });
  };

  useEffect(() => {
    fetchUserCount();
  }, []);

  const handleRegisterClick = () => {
    setLogin(false);
  };
  const handleLoginClick = () => {
    setLogin(true);
  };

  const userAcc = (userData) => {
    postUserData(userData);
    fetchUserCount();
    console.log("user-count " + usersCount);
  };

  return (
    <Wrapper>
      <Routes>
        <Route
          path="/register"
          element={
            !login && (
              <Resgiter handleLoginClick={handleLoginClick} userAcc={userAcc} />
            )
          }
        />
        <Route
          path="/login"
          element={
            login && (
              <Login
                handleRegisterClick={handleRegisterClick}
                userAcc={userAcc}
              />
            )
          }
        />
      </Routes>
    </Wrapper>
  );
}

export default App;

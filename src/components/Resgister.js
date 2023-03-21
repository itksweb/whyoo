import { useRef } from "react";
import { Link } from "react-router-dom";

const Resgiter = ({ handleLoginClick, userAcc }) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const regSubmitHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const userData = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
    };
    userAcc(userData);
    //console.log(users);
  };
  return (
    <div className="form-box register">
      <h2 contentEditable>Register</h2>
      <form action="#" onSubmit={regSubmitHandler}>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="person"></ion-icon>
          </span>
          <input type="text" required ref={usernameRef} />
          <label htmlFor="">Username</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="mail"></ion-icon>
          </span>
          <input type="email" required ref={emailRef} />
          <label htmlFor="">Email</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input
            type="password"
            autoComplete="off"
            required
            ref={passwordRef}
          />
          <label htmlFor="">Password</label>
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" />I agree to terms and conditions{" "}
          </label>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <div className="login-register">
          <p>
            Already have an account?
            <Link to="/login" className="login-link" onClick={handleLoginClick}>
              Login
            </Link>
            {/* <span className="login-link" onClick={handleLoginClick}>
              Login
            </span> */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Resgiter;

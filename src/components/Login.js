import { Link } from "react-router-dom";
import { useRef } from "react";

const Login = ({ handleRegisterClick, userAcc }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const logSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    // const userData = {
    //   email: enteredEmail,
    //   password: enteredPassword,
    // };
    // userAcc(userData)
    console.log("login successful");
  };
  return (
    <div className="form-box login">
      <h2>Login</h2>
      <form action="#" onSubmit={logSubmitHandler}>
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
            required
            autoComplete="off"
            ref={passwordRef}
          />
          <label htmlFor="">Password</label>
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <span>Forgot Password</span>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="login-register">
          <p>
            Don't have an account?
            <Link
              to="/register"
              className="register-link"
              onClick={handleRegisterClick}
            >
              Register
            </Link>
            {/* <span className="register-link" onClick={handleRegisterClick}>
              Register
            </span> */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

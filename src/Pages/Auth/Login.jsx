import React, { useContext } from "react";
import MainContainer from "../../Hooks/MainContainer";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { signInWithGoogle, SetUser, signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        SetUser(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        SetError(errorCode);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        SetUser(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        SetError(errorCode);
      });
  };
  return (
    <MainContainer>
      <div className="min-h-screen">
        <div className=" flexCenter flex-col mt-30">
          {/* <img src={logo} alt="" /> */}
          <h1 className="text-2xl font-bold">QurbaniHub</h1>
        </div>
        <div className="w-100 border-2 border-gray-200 text-center mx-auto py-25 mt-5">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p>Enter your credentials to access your account.</p>
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset flex flex-col items-center justify-baseline mt-5">
              <div className="flex flex-col items-start justify-center mt-2">
                <label className="label">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="input border-2 border-gray-200 px-3 py-1 w-70 rounded-[5px] mt-2"
                  placeholder="hello@gmail.com  "
                />
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input border-2 border-gray-200 px-3 py-1 w-70 rounded-[5px] mt-2"
                  placeholder="*****"
                />
              </div>

              <button className="btnPrimary py-2 w-70 mt-2 cursor-pointer">
                Login
              </button>
            </fieldset>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btnPrimary py-2 w-70 mt-2 cursor-pointer"
          >
            Google SignIn
          </button>
          <p className="text-[14px] mt-3">
            if You Are Not Registered,
            <Link to={"/register"} className="textPrimary underline">
              Please Click Here{" "}
            </Link>
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Login;

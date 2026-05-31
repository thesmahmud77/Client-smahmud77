import React, { useContext, useEffect } from "react";
import MainContainer from "../../Hooks/MainContainer";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { signInWithGoogle, SetUser, signInUser, user } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ JWT verify — user login হলে backend-এ check করো
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8080/user?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("User verified:", data);
        })
        .catch((err) => console.error("Token verify failed:", err));
    }
  }, [user]);

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
            class="btn bg-white text-black border-[#e5e5e5] flex items-center justify-center gap-2 mx-auto px-3 py-2 cursor-pointer"
            onClick={handleGoogleSignIn}
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
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

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import bg from "../../assets/others/authentication.png";
import logInPng from "../../assets/others/authentication2.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const location = useLocation();
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const { googleLogIn, login } = useAuth();
  const navigate = useNavigate();
  const axiosPublic=useAxiosPublic()

  const handleLogin = async (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    try {
      await login(email, password);
      navigate(location?.state || "/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { user } = await googleLogIn();
      if (user) {
        const userInfo = {
          name: user.displayName,
          email: user.email,
        };
        axiosPublic.post('/users',userInfo)
         .then(res=>console.log(res.data))
      }

      navigate(location?.state || "/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCaptcha = () => {
    const text = captchaRef.current.value;
    console.log(text);

    if (validateCaptcha(text) == true) {
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div
        className=" px-6 py-6 md:px-44 md:py-28  "
        // style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="flex gap-4 flex-col md:flex-row  md:px-12 md:py-10 py-5 shadow-2xl items-center justify-around"
        >
          {/* Image */}
          <div>
            <img src={logInPng} alt="" />
          </div>
          <div>
            <h1 className="text-center font-bold text-4xl">Log In</h1>
            <form
              onSubmit={handleLogin}
              className="fieldset  md:min-w-xl min-w-sm   p-4"
            >
              <label className=" text-xl text-[#444] md:my-3 font-semibold ">
                Email
              </label>
              <input
                type="email"
                name="email"
                className=" text-lg border-2 text-[#A1A1A1] bg-white rounded-lg border-[#D0D0D0] w-full pl-4 py-2 md:py-5"
                placeholder="Enter email"
              />
              <label className=" text-xl my-3 font-semibold text-[#444] ">
                Password
              </label>
              <input
                type="password"
                name="password"
                className=" text-lg border-2 text-[#A1A1A1] bg-white rounded-lg border-[#D0D0D0] w-full pl-4 py-2 md:py-5"
                placeholder="Enter your password"
              />

              {disable && (
                <div>
                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    ref={captchaRef}
                    className=" text-lg border-2 text-[#A1A1A1] bg-white rounded-lg border-[#D0D0D0] w-full pl-4 md:py-5 py-2"
                    placeholder="Type here"
                  />
                  <button onClick={handleCaptcha} className="btn w-1/4 ">
                    Verify
                  </button>
                </div>
              )}

              <button
                disabled={disable}
                className={` ${
                  disable ? "cursor-not-allowed opacity-30" : "cursor-pointer "
                } bg-[#D1A054B2]  text-white text-xl rounded-lg py-4 mt-4`}
              >
                Login
              </button>
            </form>
            <div className="text-center space-y-3">
              <h1 className="text-[#D1A054B2]  text-xl">
                New here?{" "}
                {
                  <Link
                    className="underline font-semibold text-amber-400"
                    to={"/signup"}
                  >
                    Create a New Account
                  </Link>
                }
              </h1>
              <p className="text-lg">Or sign in with</p>
              <div className="flex justify-center items-center gap-8 ">
                <FaGoogle
                  onClick={handleGoogleLogin}
                  className="cursor-pointer"
                  size={35}
                ></FaGoogle>
                <FaFacebook size={35}></FaFacebook>
                <FaGithub size={35}></FaGithub>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

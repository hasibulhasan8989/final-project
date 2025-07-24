import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import bg from "../../assets/others/authentication.png";
import logInPng from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
  const { singUp, updateUser } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSignup = async (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const name = from.name.value;
    const photo = from.photo.value;

    if (!/^.{6,}$/.test(password)) {
      return toast.error("Password at least 6 characters");
    }
    if (!/(?=.*\d)/.test(password)) {
      return toast.error("Password must contain at least one digit");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter");
    }

    try {
      await singUp(email, password);
      await updateUser(name, photo);
      const userInfo = {
        name,
        email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        if(res.data.insertedId){
        from.reset();
        toast.success("Sign Up Successful!!");
        navigate("/");
        };
        
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div className=" px-6 py-6 md:px-44 md:py-28  ">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="flex gap-4 flex-col md:flex-row-reverse  md:px-12 md:py-10 py-5 shadow-2xl items-center justify-around"
        >
          {/* Image */}
          <div>
            <img src={logInPng} alt="" />
          </div>
          <div>
            <h1 className="text-center font-bold text-4xl">Sign Up</h1>
            <form
              onSubmit={handleSignup}
              className="fieldset  md:min-w-xl min-w-sm   p-4"
            >
              <label className=" text-xl text-[#444] md:my-3 font-semibold ">
                Name
              </label>
              <input
               required
                type="text"
                name="name"
               
                className=" text-lg border-2 text-[#A1A1A1] bg-white rounded-lg border-[#D0D0D0] w-full pl-4 py-2 md:py-5"
                placeholder="Enter email"
              />
              <label className=" text-xl text-[#444] md:my-3 font-semibold ">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                className=" text-lg border-2 text-[#A1A1A1] bg-white rounded-lg border-[#D0D0D0] w-full pl-4 py-2 md:py-5"
                placeholder="Enter email"
              />
              <label className=" text-xl my-3 font-semibold text-[#444] ">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                className=" text-lg border-2 text-[#A1A1A1] bg-white rounded-lg border-[#D0D0D0] w-full pl-4 py-2 md:py-5"
                placeholder="Enter your password"
              />
              <label className=" text-xl my-3 font-semibold text-[#444] ">
                Photo
              </label>
              <input
                required
                type="url"
                name="photo"
                className=" text-lg border-2 text-[#A1A1A1] bg-white rounded-lg border-[#D0D0D0] w-full pl-4 py-2 md:py-5"
                placeholder="Photo URL"
              />

              <button
                className={`
                    cursor-pointer 
                    bg-[#D1A054B2]  text-white text-xl rounded-lg py-4 mt-4`}
              >
                Login
              </button>
            </form>
            <div className="text-center space-y-3">
              <h1 className="text-[#D1A054B2]  text-xl">
                Already registered?{" "}
                {
                  <Link
                    className="underline font-semibold text-amber-400"
                    to={"/login"}
                  >
                    {" "}
                    Go to log in{" "}
                  </Link>
                }
              </h1>
              <p className="text-lg">Or sign in with</p>
              <div className="flex justify-center items-center gap-8 ">
                <FaGoogle size={35}></FaGoogle>
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

export default SignUp;

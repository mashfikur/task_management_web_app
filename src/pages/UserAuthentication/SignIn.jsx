import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { userSignIn, setLoading, googleUserAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userSignIn(data.email, data.password)
      .then(() => {
        toast.success("Signed In Successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  // google sign up
  const handleGoogleSignIn = () => {
    googleUserAuth()
      .then(() => {
        toast.success("Signed in Successfully");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.code);
        setLoading(false);
      });
  };

  return (
    <div className="card lg:shadow-2xl bg-base-100 ">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered focus:outline-none"
            required
            {...register("email")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered focus:outline-none"
            required
            {...register("password")}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#2864EF] w-[20rem] mx-auto rounded-full hover:bg-[#2864EF] text-white">
            Sign In
          </button>
        </div>
        <div className="divider">OR</div>
      </form>

      <div className="flex flex-col items-center justify-center gap-2 -mt-6 mb-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-neutral w-[20rem] mx-auto rounded-full  text-white"
        >
          Sign In With Google
          <FcGoogle className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SignIn;

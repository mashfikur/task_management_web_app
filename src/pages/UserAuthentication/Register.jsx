import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, setUser, user, setLoading, googleUserAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        toast.success("Created Account Successfully");
        updateProfile(result.user, {
          displayName: data.name,
          photoURL: data.photo,
        }).then(() => {
          navigate("/");
          setUser({
            ...user,
            displayName: data.name,
            email: data.email,
            photoURL: data.photo,
          });
        });
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
        toast.success("Signed Up Successfully");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.code);
        setLoading(false);
      });
  };

  return (
    <div className="card   shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered focus:outline-none"
            required
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            required
            type="text"
            placeholder="photoURL"
            className="input input-bordered focus:outline-none"
            {...register("photo")}
          />
        </div>
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
            Register
          </button>
        </div>
        <div className="divider">OR</div>
      </form>
      <div className="flex flex-col items-center justify-center gap-2 -mt-6 mb-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-neutral w-[20rem] mx-auto rounded-full  text-white"
        >
          Sign Up With Google
          <FcGoogle className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Register;

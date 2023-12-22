import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            type="text"
            placeholder="photoURL"
            className="input input-bordered focus:outline-none"
            required
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
        <button className="btn btn-neutral w-[20rem] mx-auto rounded-full  text-white">
          Sign Up With Google
          <FcGoogle className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Register;

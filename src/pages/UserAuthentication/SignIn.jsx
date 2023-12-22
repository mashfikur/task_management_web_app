import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div className="card   shadow-2xl bg-base-100 ">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

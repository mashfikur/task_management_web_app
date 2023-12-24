import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-bg min-h-screen text-white flex  justify-center items-center">
      <div className="flex flex-col items-center gap-12">
        <h3 className=" text-5xl lg:text-7xl font-semibold">
          Oops An Error Occured{" "}
        </h3>

        <Link to="/">
          <button className="btn btn-warning shadow-2xl rounded-full px-12">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

import cover from "../../assets/images/web-banner.png";

const Banner = () => {
  return (
    <div className="flex  items-center">
      <div className="flex-1">
        <h3 className="text-7xl leading-snug font-bold">
          Seamless task management with <span>Swift Precision</span>
        </h3>

        <button className="btn bg-[#2d7bea] text-white rounded-full  px-8 text-lg shadow-xl border-none mt-12">
          {"Let's"} Explore
        </button>
      </div>
      <div className="flex-1">
        <img src={cover} alt="" />
      </div>
    </div>
  );
};

export default Banner;

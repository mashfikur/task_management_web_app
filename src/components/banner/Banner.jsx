import cover from "../../assets/images/web-banner.svg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex mt-10 lg:flex-row flex-col gap-6  items-center">
      <div className="flex-1">
        <motion.div
          initial={{ translateX: -350 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <h3 className=" text-4xl text-center lg:text-start lg:text-7xl text-white leading-snug drop-shadow-2xl shadow-indigo-50  font-bold">
              Seamless task management with <span>Swift Precision</span>
            </h3>

            <button className="btn bg-[#2d7bea] hover:bg-[#2d7bea] text-white rounded-full  px-8 text-lg shadow-xl border-none mt-12">
              {"Let's"} Explore
            </button>
          </div>
        </motion.div>
      </div>
      <div className="flex-1">
        <motion.div
          initial={{ translateX: 350 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={cover}
            alt="banner-image"
            className="px-4 lg:px-0 w-[80%] mx-auto lg:w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

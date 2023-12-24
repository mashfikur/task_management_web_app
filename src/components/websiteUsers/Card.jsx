import PropTypes from "prop-types";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ info: data }) => {
  return (
    <motion.div
      initial={{ translateY: 100, scale: 0.7 }}
      whileInView={{ translateY: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-3 rounded-xl shadow-2xl">
        <h3 className="text-4xl font-light text-center">{data.intro}</h3>
        <div className="mt-10 mb-3 lg:h-[30rem] space-y-4">
          {data.info.map((info, idx) => (
            <div className="space-y-2" key={idx}>
              <h3 className="font-semibold text-xl ">{info.main}</h3>
              <hr className="border-b-2 border-blue-400 w-[60%]" />
              <div className="space-y-2">
                {info.features.map((feature, idx) => (
                  <h4 key={idx} className="flex gap-2 ">
                    {" "}
                    <IoCheckmarkDoneSharp className="text-xl text-success" />{" "}
                    {feature}
                  </h4>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link to="/sign-in">
          <button className="btn text-lg btn-neutral w-full">
            Try it <BsStars className="" />{" "}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  info: PropTypes.object,
};

export default Card;

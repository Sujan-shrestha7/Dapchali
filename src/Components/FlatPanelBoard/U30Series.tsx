import Head from "../Head";
import React from "react";
import { motion } from "framer-motion";
import u30Image from "../../assets/images/U3.png";

const U30Series: React.FC = () => {
  return (
    <div>
        <Head/>
      <div className="px-[20px] md:px-[100px] py-[40px] md:py-[80px] flex flex-col gap-y-[80px] overflow-hidden">
        {/* Events */}
        <motion.div
          className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="font-semibold text-xl md:text-2xl text-center text-[#10507a]">
              EVENTS / NOTICE
            </h2>
            <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              voluptate culpa atque natus officia illum, nihil, assumenda autem
              excepturi hic dolores officiis cumque, ad quaerat!
            </p>
          </div>
          <img
            src={u30Image}
            className="rounded-[10px] w-full md:w-[650px] h-auto md:h-[400px] object-cover"
            alt="Events"
          />
        </motion.div>

        {/* Features */}
        <motion.div
          className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={u30Image}
            className="rounded-[10px] w-full md:w-[650px] h-auto md:h-[400px] object-cover"
            alt="Features"
          />
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="font-semibold text-xl md:text-2xl text-center text-[#10507a]">
              FEATURES
            </h2>
            <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              illum provident vero inventore quis qui, ab itaque quisquam natus.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default U30Series;

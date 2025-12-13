import Head from "../Head";
import Footer from "../Footer";
import React from "react";
import { motion } from "framer-motion";
import u30Image from "../../assets/images/U3.png";
import u3home from "../../assets/images/u3home.jpg";

const U30Series: React.FC = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-[#000000] shadow-md transition-all duration-1000">
      <Head />
      </div>
      <div className="relative w-full h-[500px] md:h-screen">
        <img className="w-full h-full object-cover" src={u3home} alt="" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
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
            <h2 className="font-semibold text-xl md:text-2xl text-[#10507a]">
              The Google Ecosystem
            </h2>
            <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam With
              the ELDA- certifies U3 series, you can access Google's expansive
              suite of apps freely and securely. It's built in collabration
              tools and intuitive operating system ensures a smooth and
              hassle-free start.
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
              Intelligent Touchscreen Technology
            </h2>
            <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed">
              Explore a wide range of writing possibilities with our advance
              pressure sensitivity feature. Effortlessly control stroke
              thickness by adjusting the force applied with your stykus. Plus,
              Our palm rejection function allows you to rest your palm on the
              screen while writing, ensuring a delightful and immersive writing
              experience.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default U30Series;

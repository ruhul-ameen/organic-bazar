import React from "react";
import SummeryCount from "./SummeryCount";
import HeroCarts from "./HeroCarts";

function HeroSection() {
  return (
    <div className=" w-full h-min bg-hero-pattern bg-no-repeat bg-right-top bg-yellow-400 dark:bg-slate-800 text-gray-700 dark:text-yellow-500">
      <div className="w-full h-full p-10">
        <div>
          <h1 className="text-6xl">
            <span className="text-green-600 text-7xl font-bold">Organic</span>{" "}
            Foods at <br /> your <span></span>
            <span className="dark:text-yellow-600 font-semibold">
              Doorsteps
            </span>
            <p className="text-sm text-gray-600 dark:text-yellow-400 mt-4">
              Get your all choices with{" "}
              <span className="text-green-600 text-xl font-semibold">
                Organic
              </span>{" "}
              <span className="text-gray-800-600 text-xl font-semibold">
                Bazar
              </span>
            </p>
          </h1>
        </div>
        <div className="flex items-center space-x-10 mt-10">
          <button className="bg-green-500 px-4 py-2 rounded-full text-xl text-white uppercase">
            Start Shopping
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-full text-xl text-white uppercase">
            Join now
          </button>
        </div>
        <SummeryCount />
        <HeroCarts />
      </div>
    </div>
  );
}

export default HeroSection;

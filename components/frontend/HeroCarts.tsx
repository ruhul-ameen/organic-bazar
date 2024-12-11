import { Sprout, Truck, Vegan } from "lucide-react";
import React from "react";
import HeroCart from "./HeroCart";

const cartCategories = [
  {
    title: "Fresh From Firm",
    cartDescription:
      "Here you always get fresh products directly from the firm.",
    bgColor: "bg-green-500",
    cartIcon: <Vegan />,
  },
  {
    title: "100% Organic",
    cartDescription:
      "We assure our products are 100% organic, completely naturally produced and preserved.",
    bgColor: "bg-gray-500",
    cartIcon: <Sprout />,
  },
  {
    title: "Free delivery",
    cartDescription: "Order and get free home delivery in a very short time.",
    bgColor: "bg-orange-500",
    cartIcon: <Truck />,
  },
];

function HeroCarts() {
  return (
    <div className="flex items-center justify-center space-x-2 mt-10">
      {cartCategories.map((items, i) => {
        return <HeroCart items={items} key={i} />;
      })}
    </div>
  );
}

export default HeroCarts;

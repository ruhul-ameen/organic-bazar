import React from "react";

function HeroCart({ items }) {
  return (
    <div
      className={`${items.bgColor} flex items-center space-x-2 w-80 h-32 py-4 px-6 rounded-md shadow-lg text-white hover:scale-110 duration-75`}
    >
      <div className="text-6xl w-1/4">{items.cartIcon}</div>
      <div className="w-9/12">
        <h2 className="text-2xl font-semibold">{items.title}</h2>
        <p className="text-sm">{items.cartDescription}</p>
      </div>
    </div>
  );
}

export default HeroCart;

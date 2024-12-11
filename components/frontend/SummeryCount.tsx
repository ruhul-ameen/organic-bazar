import { Plus } from "lucide-react";
import React from "react";

const summaries = [
  {
    value: 20,
    icon: <Plus />,
    description: "Product Varieties",
  },
  {
    value: 60,
    icon: <Plus />,
    description: "Happy Customers",
  },
  {
    value: 15,
    icon: <Plus />,
    description: "Store Locations",
  },
];

function SummeryCount() {
  return (
    <div className="flex items-center space-x-4 mt-10">
      {summaries.map((items, i) => {
        return (
          <div key={i} className="p-4">
            <div className="flex items-center text-5xl font-semibold space-x-1 text-gray-700 dark:text-yellow-500 mb-2">
              <h2>{items.value}</h2>
              <span className="text-6xl font-bold"> {items.icon}</span>
            </div>
            <h3 className="uppercase text-sm">{items.description}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default SummeryCount;

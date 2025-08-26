import React, { useState } from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./Interests";

const TabForm = () => {
  const [activetab, setActivetab] = useState(0);
  const mode = useSelector((state) => state.theme.mode); 

  const tabs = [
    { name: "profile", component: Profile },
    { name: "interests", component: Interests },
    { name: "settings", component: Settings },
  ];

  const ActiveComponent = tabs[activetab].component;

  return (
    <>
      {/* Tabs */}
      <div className="border max-w-lg mt-5 mx-auto">
        <div className="flex">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActivetab(index)}
              className={`p-2 flex-1 text-center border-r last:border-r-0 cursor-pointer ${
                activetab === index
                  ? "bg-blue-500 text-white font-semibold"
                  : "bg-white text-black"
              }`}
            >
              <h3>{tab.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Content Box with Dark/Light Mode */}
      <div
        className={`border max-w-lg border-t-0 mx-auto p-4   ${
          mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <ActiveComponent />
      </div>
    </>
  );
};

export default TabForm;

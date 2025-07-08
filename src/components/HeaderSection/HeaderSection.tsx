import  React ,{ useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const HeaderSection = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState("all");

  const tabItems = [
    { id: "all", label: "All Orders" },
    { id: "pending", label: "Pending" },
    { id: "reviewed", label: "Reviewed" },
    { id: "arrived", label: "Arrived" },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const tab = tabItems.find(t => t.id === tabId);
    console.log(`Tab clicked: ${tab?.label}`);
  };

  const handleMoreOptionsClick = () => {
    console.log("More options clicked");
    // Add your more options logic here
  };

  return (
    <header className="flex items-center gap-6 pl-8 pr-4 pt-1 pb-0 relative w-full bg-white border-t border-[#eeeeee]">
      <Tabs 
        defaultValue="all" 
        className="flex items-start"
        value={activeTab}
        onValueChange={handleTabClick}
      >
        <TabsList className="h-auto bg-transparent p-0 flex">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`gap-2 px-4 py-2.5 rounded-none ${
                activeTab === tab.id
                  ? "bg-[#e8f0e9] border-t-2 border-[#4b6a4f] text-[#3e5741] font-paragraph-16-m-semi-bold-16-24"
                  : "bg-transparent text-[#757575] font-paragraph-16-m-medium-16-24"
              }`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
          <div className="gap-1 px-1 py-2 self-stretch inline-flex items-center justify-center">
            <button 
              className="inline-flex items-center gap-2 p-1 bg-white rounded"
              onClick={handleMoreOptionsClick}
            >
              <div className="relative w-5 h-5">
                <img
                  className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                  alt="Add new tab"
                  src="icons/plus.png"
                />
              </div>
            </button>
          </div>
        </TabsList>
      </Tabs>
    </header>
  );
};
import { BellIcon } from "lucide-react";
import { useState } from "react";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import Breadcrumb from "../ui/breadcrumb";

export const NavigationBarSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  
  const navigationPath = [
    { name: "Workspace", href: "#", current: false },
    { name: "Folder 2", href: "#", current: false },
    { name: "Spreadsheet 3", href: "#", current: true },
  ];

  const handleBreadcrumbClick = (name: string) => {
    console.log(`Breadcrumb clicked: ${name}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleProfileClick = () => {
    setShowProfilePopup(!showProfilePopup);
    console.log(`Profile ${showProfilePopup ? 'closed' : 'opened'}`);
  };

  const handleProfileAction = (action: string) => {
    console.log(`Profile action: ${action}`);
    setShowProfilePopup(false);
  };

  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 border-b border-[#eeeeee] w-full">
      {/* Left side - Logo and Breadcrumb */}
      <div className="flex items-center gap-4 min-w-0">
        <img
          className="w-6 h-6"
          alt="Panel"
          src="icons/panel.svg"
        />
        <Breadcrumb
          items={navigationPath}
          onClick={(name) => handleBreadcrumbClick(name)}
        />
      </div>

      {/* Right side - Search, Notifications, Profile */}
      <div className="flex items-center gap-4 mr-5">
        {/* Search - Hidden on small screens */}
        <div className="hidden md:flex items-center gap-2 p-2 bg-[#f6f6f6] rounded-md">
          <div className="w-4 h-4 relative">
            <img
              className="absolute w-[13px] h-[13px] top-px left-px"
              alt="Search"
              src="icons/group.png"
            />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search within sheet"
            className="bg-transparent border-none outline-none text-sm text-[#757575] w-36"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                console.log(`Search submitted: ${searchValue}`);
              }
            }}
          />
        </div>

        {/* Notifications */}
        <button 
          className="relative p-2 rounded-lg hover:bg-gray-100"
          onClick={() => console.log('Notifications clicked')}
        >
          <BellIcon className="w-5 h-5 text-gray-600" />
          <Badge className="flex items-center justify-center w-5 h-5 absolute -top-1 -right-1 bg-[#4b6a4f] text-white rounded-full border-2 border-white p-0">
            <span className="text-xs font-medium">2</span>
          </Badge>
        </button>

        {/* User Profile with Popup */}
        <div className="relative">
          <button 
            className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 max-w-[180px]"
            onClick={handleProfileClick}
          >
            <Avatar 
              src="icons/image.png"
              alt="User avatar"
              fallback="JD"
              size="sm"
            />

            <div className="flex flex-col items-start overflow-hidden">
              <span className="text-sm text-[#121212] truncate">
                John Doe
              </span>
              <span className="text-xs text-[#757575] truncate">
                john.doe...
              </span>
            </div>
          </button>

          {showProfilePopup && (
            <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 w-64 z-50 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Avatar 
                  src="icons/image.png"
                  alt="User avatar"
                  fallback="JD"
                  size="md"
                />
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-600">john.doe@companyname.com</p>
                </div>
              </div>
              <div className="border-t pt-3">
                <button 
                  className="w-full text-left py-2 px-2 hover:bg-gray-100 rounded text-sm"
                  onClick={() => handleProfileAction('Account Settings')}
                >
                  Account Settings
                </button>
                <button 
                  className="w-full text-left py-2 px-2 hover:bg-gray-100 rounded text-sm"
                  onClick={() => handleProfileAction('Sign Out')}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
import {
  ArrowUpDownIcon,
  ChevronsRight ,
  DownloadIcon,
  EyeOff,
  ListFilter,
  UploadIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";


export const DataRowSection = (): React.JSX.Element => {
  const [activeToolbar, setActiveToolbar] = useState<string | null>(null);
  // Define toolbar actions for better maintainability
  const toolbarActions = [
    { id: 'hide', icon: <EyeOff className="w-5 h-5" />, label: "Hide fields" },
    { id: 'sort', icon: <ArrowUpDownIcon className="w-5 h-5" />, label: "Sort" },
    { id: 'filter', icon: <ListFilter className="w-5 h-5" />, label: "Filter" },
    { id: 'cell', icon: <img src="icons/cellview.png" className="w-5 h-5"/>, label: "Cell view" },
  ];

  // Define export actions
  const exportActions = [
    { id: 'import', icon: <DownloadIcon className="w-5 h-5" />, label: "Import" },
    { id: 'export', icon: <UploadIcon className="w-5 h-5" />, label: "Export" },
    { id: 'share', icon: <img src="icons/share.png" className="w-5 h-5"/>, label: "Share" },
  ];

  const handleToolbarClick = (id: string) => {
    setActiveToolbar(activeToolbar === id ? null : id);
    console.log(`Toolbar action clicked: ${id}`);
  };

  const handleExportClick = (id: string) => {
    console.log(`clicked: ${id}`);
  };

  const handleNewAction = () => {
    console.log('New Action button clicked');
  };

  return (
    <header className="flex items-center gap-2 px-2 py-1.5 w-full bg-white border-b border-[#eeeeee]">
      {/* Tool bar dropdown */}
      <Button 
        variant="ghost" 
        className="flex items-center gap-1 p-2 rounded"
        onClick={() => console.log('Toolbar dropdown clicked')}
      >
        <span className="text-[14px] font-normal  text-[#121212]">
          Tool bar
        </span>
        <ChevronsRight  className="w-4 h-4" />
      </Button> 

<div className="w-px h-6 bg-[#eeeeee]" />


      {/* Main toolbar actions */}
      <div className="flex items-center gap-1 flex-1">
        {toolbarActions.map((action) => (
          <Button
            key={action.id}
            variant="ghost"
            className={`flex items-center gap-1 pl-2 pr-3 py-2 rounded-md ${
              activeToolbar === action.id ? 'bg-slate-100' : ''
            }`}
            onClick={() => handleToolbarClick(action.id)}
          >
            {action.icon}
            <span className="text-[14px] font-normal  text-[#121212]">
              {action.label}
            </span>
          </Button>
        ))}
      </div>

      {/* Export actions */}
      <div className="flex items-center justify-end gap-2 mr-7">
        <div className="flex items-start gap-2">
          {exportActions.map((action) => (
         <Button
  key={action.id}
  variant="outline"
  className="flex items-center gap-1 pl-2 pr-3 py-2 rounded-md border border-[#eeeeee] text-[#545454] hover:bg-[#f5f5f5]"
  onClick={() => handleExportClick(action.id)}
>
  {action.icon}
  <span className="text-[14px] font-normal">{action.label}</span>
</Button>
          ))}
        </div>

        {/* New Action button */}
        <Button 
          className="flex items-center gap-1 px-6 py-2 bg-[#4b6a4f] hover:bg-[#3d5840] text-white rounded-md"
          onClick={handleNewAction}
        >
         <img 
  src="/icons/arrow-split.svg" 
  alt="Arrow split"
  className="w-6 h-6" 
  style={{ filter: "brightness(100) saturate(100%) contrast(150%)" }} 
/>
          <span className="text-[14px] font-medium">New Action</span>
        </Button>
      </div>
    </header>
  );
};

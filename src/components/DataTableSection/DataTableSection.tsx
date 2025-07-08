import React, { useState, useEffect, useRef } from "react";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export const DataTableSection = () => {
  const [focusedCell, setFocusedCell] = useState({ row: 0, col: 1 });
  const tableRef = useRef<HTMLTableElement>(null);
  const totalRows = 25;
  const totalCols = 10;

  // Column headers data
  const columnHeaders = [
    {
      title: "#",
      bgColor: "bg-[#eeeeee]",
    },
    {
      icon: "/icons/briefcase.svg",
      title: "Job Request",
      bgColor: "bg-[#eeeeee]",
    },
    {
      icon: "/icons/calendar.svg",
      title: "Submitted",
      bgColor: "bg-[#eeeeee]",
    },
    {
      icon: "/icons/chevron-circle.svg",
      title: "Status",
      bgColor: "bg-[#eeeeee]",
    },
    {
      icon: "/icons/person.svg",
      title: "Submitter",
      bgColor: "bg-[#eeeeee]",
    },
    {
      icon: "/icons/globe.svg",
      title: "URL",
      bgColor: "bg-[#eeeeee]",
    },
    { 
      icon: "/icons/emoji.svg", 
      title: "Assigned", 
      bgColor: "bg-[#e8f0e9]", 
      headerBgColor: "bg-[#d2e0d4]", 
      headerTitle: "ABC" 
    },
    { 
      title: "Priority", 
      bgColor: "bg-[#eae3fc]", 
      headerBgColor: "bg-[#dccffc]", 
      headerTitle: "Answer a question" 
    },
    { 
      title: "Due Date", 
      bgColor: "bg-[#eae3fc]", 
      headerBgColor: "bg-[#dccffc]", 
      headerTitle: "Answer a question" 
    },
    { 
      title: "Est. Value", 
      bgColor: "bg-[#ffe9e0]", 
      headerBgColor: "bg-[#fac2af]", 
      headerTitle: "Extract" 
    },
  ];
type JobRequest = {
  id: number;
  request: string;
  submitted: string;
  status: { label: string; color: string };
  submitter: string;
  url: string;
  assigned: string;
  priority: { label: string; color: string };
  dueDate: string;
  estValue: string;
};
  // Complete job request data
  const jobRequests = [
    {
      id: 1,
      request: "Launch social media campaign for product XYZ",
      submitted: "15-11-2024",
      status: { label: "In-process", color: "bg-[#fff3d6] text-[#84640a]" },
      submitter: "Aisha Patel",
      url: "www.aishapatel.com",
      assigned: "Sophie Choudhury",
      priority: { label: "Medium", color: "text-[#c1920f]" },
      dueDate: "20-11-2024",
      estValue: "6,200,000",
    },
    {
      id: 2,
      request: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: { label: "Need to start", color: "bg-slate-200 text-slate-600" },
      submitter: "Irfan Khan",
      url: "www.irfankhanportfolio.com",
      assigned: "Tejas Pandey",
      priority: { label: "High", color: "text-[#ef4c43]" },
      dueDate: "30-10-2024",
      estValue: "3,500,000",
    },
    {
      id: 3,
      request: "Finalize user testing feedback for app update",
      submitted: "05-12-2024",
      status: { label: "In-process", color: "bg-[#fff3d6] text-[#84640a]" },
      submitter: "Mark Johnson",
      url: "www.markjohnsondesigns.com",
      assigned: "Rachel Lee",
      priority: { label: "Medium", color: "text-[#c1920f]" },
      dueDate: "10-12-2024",
      estValue: "4,750,000",
    },
    {
      id: 4,
      request: "Design new features for the website",
      submitted: "10-01-2025",
      status: { label: "Complete", color: "bg-[#d2f2e2] text-[#0a6d3c]" },
      submitter: "Emily Green",
      url: "www.emilygreenart.com",
      assigned: "Tom Wright",
      priority: { label: "Low", color: "text-[#1a8cff]" },
      dueDate: "15-01-2025",
      estValue: "5,900,000",
    },
    {
      id: 5,
      request: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: { label: "Blocked", color: "bg-[#ffe1dd] text-[#c12119]" },
      submitter: "Jessica Brown",
      url: "www.jessicabrowncreative.com",
      assigned: "Kevin Smith",
      priority: { label: "Low", color: "text-[#1a8cff]" },
      dueDate: "30-01-2025",
      estValue: "2,800,000",
    },
    {
      id: 6,
      request: "Create marketing materials for new product launch",
      submitted: "12-02-2025",
      status: { label: "In-process", color: "bg-[#fff3d6] text-[#84640a]" },
      submitter: "David Wilson",
      url: "www.davidwilsonmarketing.com",
      assigned: "Lisa Chen",
      priority: { label: "High", color: "text-[#ef4c43]" },
      dueDate: "20-02-2025",
      estValue: "7,300,000",
    },
    {
      id: 7,
      request: "Develop training materials for new hires",
      submitted: "03-03-2025",
      status: { label: "Need to start", color: "bg-slate-200 text-slate-600" },
      submitter: "Robert Taylor",
      url: "www.roberttaylortraining.com",
      assigned: "Sarah Miller",
      priority: { label: "Medium", color: "text-[#c1920f]" },
      dueDate: "15-03-2025",
      estValue: "3,200,000",
    }
  ];
  // Handle cell click events
const handleCellClick = (rowIndex: number, colIndex: number, isHeader = false) => {
  if (!isHeader) {
    setFocusedCell({ row: rowIndex, col: colIndex });
  }

  const columnName = columnHeaders[colIndex].title;

  if (isHeader) {
    console.log(`Header clicked: "${columnName}"`);
    return;
  }

  if (rowIndex >= jobRequests.length) {
    console.log(`Empty cell at Row ${rowIndex + 1}, Column "${columnName}"`);
  } else {
    // Create a type-safe mapping of column indices to property names
    const columnMapping: (keyof JobRequest)[] = [
      'id',
      'request',
      'submitted',
      'status',
      'submitter',
      'url',
      'assigned',
      'priority',
      'dueDate',
      'estValue'
    ];

    const propertyName = columnMapping[colIndex];
    const cellValue = jobRequests[rowIndex][propertyName];
    
    let displayValue;
    if (cellValue === null || cellValue === undefined) {
      displayValue = "null";
    } else if (typeof cellValue === 'object') {
      displayValue = cellValue.label || JSON.stringify(cellValue);
    } else {
      displayValue = cellValue;
    }

    console.log(`Cell [Row ${rowIndex + 1}, "${columnName}"]:`, {
      Column: columnName,
      Value: displayValue,
    });
  }
};
interface Job {
  id: number;
  request: string;
  submitted: string;
  status: { label: string; color: string };
  submitter: string;
  url: string;
  assigned: string;
  priority: { label: string; color: string };
  dueDate: string;
  estValue: string;
}
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(e.key)) return;
    
    e.preventDefault();
    
    let { row, col } = focusedCell;
    
    switch (e.key) {
      case 'ArrowUp': row = Math.max(0, row - 1); break;
      case 'ArrowDown': row = Math.min(totalRows - 1, row + 1); break;
      case 'ArrowLeft': col = Math.max(1, col - 1); break;
      case 'ArrowRight': col = Math.min(totalCols, col + 1); break;
      case 'Tab':
        if (e.shiftKey) {
          col = col > 1 ? col - 1 : totalCols;
          if (col === totalCols) row = Math.max(0, row - 1);
        } else {
          col = col < totalCols ? col + 1 : 1;
          if (col === 1) row = Math.min(totalRows - 1, row + 1);
        }
        break;
      case 'Enter':
        console.log(`Cell clicked at row ${row + 1}, column ${col}`);
        break;
    }

    setFocusedCell({ row, col });
  };

  // Focus the cell when focusedCell changes
  useEffect(() => {
    const cell = tableRef.current?.querySelector(`tr:nth-child(${focusedCell.row + 1}) td:nth-child(${focusedCell.col + 1})`);
    if (cell) {
      (cell as HTMLElement).focus();
      (cell as HTMLElement).tabIndex = 0;
    }
  }, [focusedCell]);

  // Render cell content based on column index
  const renderCellContent = (job: Job, colIndex: number) => {
    switch (colIndex) {
      case 0: return job.id;
      case 1: return job.request;
      case 2: return <span className="text-right">{job.submitted}</span>;
      case 3: return <Badge className={`${job.status.color} rounded-full`}>{job.status.label}</Badge>;
      case 4: return job.submitter;
      case 5: return <span className="underline">{job.url}</span>;
      case 6: return job.assigned;
      case 7: return <span className={`${job.priority.color} whitespace-nowrap`}>{job.priority.label}</span>;
      case 8: return <span className="text-right">{job.dueDate}</span>;
      case 9: return (
        <div className="flex justify-end gap-1">
          <span>{job.estValue}</span>
          <span className="text-[#afafaf] whitespace-nowrap">₹</span>
        </div>
      );
      default: return null;
    }
  };
  
  return (
    <div className="h-[872px] w-full bg-[#f6f6f6] overflow-hidden">
      <div className="flex flex-col h-full" onKeyDown={handleKeyDown}>
        <div className="overflow-auto">
          <Table ref={tableRef} className="border-collapse border border-[#cbcbcb] w-full">
            {/* Document Title Header */}
            <TableHeader>
              <TableRow className=" border-b border-[#f6f6f6]">
                <TableHead className="h-8 p-0 bg-white whitespace-nowrap" ></TableHead>
                <TableHead className="h-8 p-0 pl-2 bg-[#e2e2e2] whitespace-nowrap" colSpan={4} onClick={()=> console.log("Clicked Header:Financial Overview")}>
                  <div className="inline-flex items-center gap-1 p-1 bg-[#eeeeee] rounded">
                    <img
                      className="w-4 h-4"
                      alt="Link"
                      src="icons/link.svg"
                    />
                    <span className="font-paragraph-12-XS-regular-12-16 text-[#545454] whitespace-nowrap">
                      Q3 Financial Overview
                    </span>
                  </div>
                  <img
                    className="w-4 h-4 inline-flex ml-1 mb-1"
                    alt="Arrow sync"
                    src="icons/arrow-sync.svg"
                  />
                </TableHead>
                <TableHead className="h-8 p-0 bg-white whitespace-nowrap"></TableHead>
                <TableHead className="h-8 p-0 bg-[#d2e0d4] text-[#505450] whitespace-nowrap" onClick={()=> console.log("Clicked Header:ABC")}>
                  <div className="flex items-center gap-1 px-4">
                    <img
                      className="w-4 h-4"
                      alt="Arrow split"
                      src="icons/arrow-split.svg"
                    />
                    <span className="font-paragraph-14-s-medium-14-20">
                      ABC
                    </span>
                    <div className="flex w-5 h-5 items-center justify-center">
                      <img
                        className="w-4 h-4"
                        alt="More"
                        src="icons/more.svg"
                      />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="h-8 p-0 bg-[#dccffc] text-[#463e59] whitespace-nowrap" onClick={()=> console.log("Clicked Header:Answer a question")} colSpan={2}>
                  <div className="flex items-center gap-1 px-4">
                    <img
                      className="w-4 h-4"
                      alt="Arrow split"
                      src="icons/arrow-split.svg"
                    />
                    <span className="font-paragraph-14-s-medium-14-20">
                      Answer a question
                    </span>
                    <div className="flex w-5 h-5 items-center justify-center">
                      <img
                        className="w-4 h-4"
                        alt="More"
                        src="icons/more.svg"
                      />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="h-8 p-0 bg-[#fac2af] text-[#695149] whitespace-nowrap" onClick={()=> console.log("Clicked Header:Extract")}>
                  <div className="flex items-center gap-1 px-4">
                    <img
                      className="w-4 h-4"
                      alt="Arrow split"
                      src="icons/arrow-split.svg"
                    />
                    <span className="font-paragraph-14-s-medium-14-20">
                      Extract
                    </span>
                    <div className="flex w-5 h-5 items-center justify-center">
                      <img
                        className="w-4 h-4"
                        alt="More"
                        src="icons/more.svg"
                      />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="h-8 p-0 bg-[#eeeeee] whitespace-nowrap w-[150px] border border-dashed border-[#cbcbcb]">
                  <div className="flex items-center justify-center" onClick={()=> console.log("Clicked Header:Add")}>
                    <img
                      className="w-5 h-5"
                      alt="Add"
                      src="icons/add.svg"
                    />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>

            {/* Column Headers */}
            <TableHeader>
              <TableRow className="border-b border-[#f6f6f6]" >
                {columnHeaders.map((header, index) => (
                  <TableHead 
                    key={index}
                     onClick={() => handleCellClick(0, index, true)} 
                    className={`h-8 p-0 ${header.bgColor} ${index > 0 ? 'border-l border-[#f6f6f6]' : ''}  whitespace-nowrap ${index === 0 ? 'pl-2' : ''}`}
                  >
                    <div className="flex items-center gap-1 h-full px-2">
                      {header.icon && <img className="w-4 h-4" src={header.icon} alt={header.title} />}
                      <span className="font-paragraph-12-XS-semi-bold-12-16 text-[#757575]">
                        {header.title}
                      </span>
                      {index < 6 && (
                        <div className="inline-flex items-center p-1">
                          <img
                            className="w-3 h-3"
                            alt="Chevron"
                            src="https://c.animaapp.com/mcoc878jIccjmr/img/chevron.svg"
                          />
                        </div>
                      )}
                    </div>
                  </TableHead>
                ))}
                <TableHead  className="h-8 p-0 bg-white border border-dashed border-l border-[#f6f6f6]  w-[150px]"></TableHead>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
           <TableBody>
              {/* Data Rows */}
              {jobRequests.map((job, rowIndex) => (
                <TableRow key={job.id} className="border-b-0">
                  {columnHeaders.map((_, colIndex) => (
                    <TableCell
                      key={colIndex}
                      className={`h-8 p-0 bg-white border border-[#ededed] whitespace-nowrap overflow-hidden text-ellipsis ${
                        colIndex === 0 ? "text-[#757575] w-8" : ""
                      } ${
                        colIndex === 2 || colIndex === 8 || colIndex === 9 ? 'text-right' : ''
                      } ${
                        focusedCell.row === rowIndex && focusedCell.col === colIndex 
                          ? 'outline outline-2 outline-[#4b6a4f]' 
                          : ''
                      }`}
                      tabIndex={focusedCell.row === rowIndex && focusedCell.col === colIndex ? 0 : -1}
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                    >
                      <div className="h-8 flex items-center px-2">
                        {renderCellContent(job, colIndex)}
                      </div>
                    </TableCell>
                  ))}
                  <TableCell className="relative h-8 p-0 bg-white">
                    <div className="absolute inset-y-0 left-0 border-l border-dashed border-[#CBCBCB] w-px"></div>
                    <div className="absolute inset-y-0 right-0 border-r border-dashed border-[#CBCBCB] w-px"></div>
                    <div className="h-full w-full"></div>
                  </TableCell>
                </TableRow>
              ))}

              {/* Empty Rows */}
              {Array.from({ length: 18 }).map((_, rowIndex) => (
                <TableRow key={`empty-${rowIndex}`} className="border-b-0">
                  {columnHeaders.map((_, colIndex) => (
                    <TableCell
                      key={colIndex}
                      className={`h-8 p-0 bg-white border border-[#ededed] ${
                        focusedCell.row === rowIndex + jobRequests.length && focusedCell.col === colIndex 
                          ? 'outline outline-2 outline-[#4b6a4f]' 
                          : ''
                      }`}
                      tabIndex={
                        focusedCell.row === rowIndex + jobRequests.length && focusedCell.col === colIndex ? 0 : -1
                      }
                      onClick={() => handleCellClick(rowIndex + jobRequests.length, colIndex)}
                    >
                      {colIndex === 0 && (
                        <div className="h-8 flex items-start px-2 justify-start">
                          <span className="font-paragraph-14-s-regular-14-20 text-[#757575]">
                            {rowIndex + jobRequests.length + 1}
                          </span>
                        </div>
                      )}
                    </TableCell>
                  ))}
                  <TableCell className="relative h-8 p-0 bg-white">
                    <div className="absolute inset-y-0 left-0 border-l border-dashed border-[#CBCBCB] w-px"></div>
                    <div className="absolute inset-y-0 right-0 border-r border-dashed border-[#CBCBCB] w-px"></div>
                    <div className="h-full w-full"></div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
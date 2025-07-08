// components/ui/Breadcrumb.tsx

import React from "react";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { Button } from "../ui/button"; // if you’re using shadcn/ui

type BreadcrumbItem = {
  name: string;
  href?: string;
  current?: boolean;
};

type Props = {
  items: BreadcrumbItem[];
  onClick?: (name: string) => void;
};

const Breadcrumb: React.FC<Props> = ({ items, onClick }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-1">
        {items.map((item, index) => (
          <React.Fragment key={item.name}>
            {index > 0 && (
              <li className="text-[#afafaf]">
                <ChevronRightIcon className="w-3 h-3" />
              </li>
            )}
            <li className="flex items-center">
              {item.href && !item.current ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onClick?.(item.name);
                  }}
                  className="text-sm font-medium text-[#afafaf] hover:underline"
                >
                  {item.name}
                </a>
              ) : (
                <span className="text-sm font-medium text-[#121212] flex items-center">
                  {item.name}
                  {item.current && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-6 h-6 ml-2 p-0"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("More options clicked");
                      }}
                    >
                      <MoreHorizontalIcon className="w-5 h-5" />
                    </Button>
                  )}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

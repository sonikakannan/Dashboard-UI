import React from "react";
import { TableRow, TableCell } from "../components/ui/table";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { GlobeIcon } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";
import { FaWordpressSimple } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const DashboardTableRow = ({
  article,
  checked,
  onCheckboxChange,
  openDropdown,
  setOpenDropdown,
  index,
  handleIconChange,
}) => {
  return (
    <TableRow className="hover:bg-muted transition-colors">
      <TableCell>
        <Checkbox checked={checked} onCheckedChange={onCheckboxChange} />
      </TableCell>
      <TableCell>{article.title}</TableCell>
      <TableCell>
        {article.keyword} [{article.traffic}]
      </TableCell>
      <TableCell>{article.words}</TableCell>
      <TableCell>{article.createdOn}</TableCell>
      <TableCell>
        <Button
          variant="outline"
          size="sm"
          className="border border-green-500 text-green-500 cursor-pointer hover:text-green-600"
        >
          View
        </Button>
      </TableCell>
      <TableCell className="relative">
        <div className="flex items-center gap-2">
          <span className="text-[#00749C]">
            {article.selectedIcon === "globe" ? (
              <GlobeIcon className="h-5 w-5" />
            ) : article.selectedIcon === "github" ? (
              <IoLogoGithub className="h-5 w-5" />
            ) : (
              <FaWordpressSimple className="h-5 w-5" />
            )}
          </span>
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === index ? null : index)
            }
          >
            <IoMdArrowDropdown className="h-4 w-4 text-gray-600 hover:text-black" />
          </button>
        </div>
        {openDropdown === index && (
          <div className="absolute right-0 mt-1 z-10 bg-white cursor-pointer border rounded shadow-md p-2 space-y-1 w-12 flex flex-col">
            <button
              className="flex items-center justify-center gap-2 w-full hover:text-blue-600"
              onClick={() => handleIconChange(index, "globe")}
            >
              <GlobeIcon className="h-4 w-4" />
            </button>
            <button
              className="flex items-center justify-center gap-2 w-full hover:text-blue-600"
              onClick={() => handleIconChange(index, "github")}
            >
              <IoLogoGithub className="h-4 w-4" />
            </button>
            <button
              className="flex items-center justify-center gap-2 w-full text-[#00749C] hover:text-blue-600"
              onClick={() => handleIconChange(index, "wordpress")}
            >
              <FaWordpressSimple className="h-4 w-4" />
            </button>
          </div>
        )}
      </TableCell>
    </TableRow>
  );
};

export default DashboardTableRow;

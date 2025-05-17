import React, { useState, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Checkbox } from "../components/ui/checkbox";
import { articles as initialArticles } from "../utils/data";
import { MdKeyboardArrowLeft, MdChevronRight } from "react-icons/md";

import DashboardTableRow from "./DashboardTableRow";

const DashboardContent = ({ activeTab }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(9);
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  const lowerSearch = searchTerm.toLowerCase();

  const filteredArticles = initialArticles.filter(
    (article) =>
      article.category === activeTab &&
      (article.title.toLowerCase().includes(lowerSearch) ||
        article.keyword.toLowerCase().includes(lowerSearch))
  );

  const indexOfLast = currentPage * entriesPerPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredArticles.length / entriesPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeTab]);

  useEffect(() => {
    const allChecked = currentArticles.every(
      (article) => checkedItems[article.title]
    );
    setSelectAll(allChecked && currentArticles.length > 0);
  }, [checkedItems, currentArticles]);

  const handleSelectAll = () => {
    const updated = {};
    currentArticles.forEach((article) => {
      updated[article.title] = !selectAll;
    });
    setCheckedItems({ ...checkedItems, ...updated });
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (title) => {
    setCheckedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleIconChange = (idx, icon) => {
    currentArticles[idx].selectedIcon = icon;
    setOpenDropdown(null);
  };

  return (
    <div className="p-6 max-w-screen overflow-x-auto">
      <div className="flex justify-center w-full">
        <Input
          placeholder={`Search in ${activeTab}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 max-w-sm"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} />
            </TableHead>
            <TableHead>Article Title</TableHead>
            <TableHead>Keyword [Traffic]</TableHead>
            <TableHead>Words</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Publish</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentArticles.length > 0 ? (
            currentArticles.map((article, index) => (
              <DashboardTableRow
                key={index}
                article={article}
                checked={!!checkedItems[article.title]}
                onCheckboxChange={() => handleCheckboxChange(article.title)}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                index={index}
                handleIconChange={handleIconChange}
              />
            ))
          ) : (
            <TableRow>
              <td colSpan={7} className="text-center py-4 text-gray-500">
                No articles found.
              </td>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-3 sm:space-y-0">
        <div className="flex flex-wrap items-center space-x-2 justify-center sm:justify-start">
          <span className="font-bold text-gray-700 whitespace-nowrap">
            Total {filteredArticles.length} Article Titles
          </span>
          <span className="font-bold text-gray-700">| Show</span>
          <select
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border px-2 py-1 rounded text-sm"
          >
            {[5, 9, 10, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span>entries per page</span>
        </div>

        <div className="flex items-center space-x-2 justify-center sm:justify-end">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <MdKeyboardArrowLeft />
          </Button>
          <span>
            {currentPage}/{totalPages}
          </span>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <MdChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

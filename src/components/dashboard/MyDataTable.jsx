import React, { useState, useEffect } from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableCaption } from "../ui/table";
import { Pagination, PaginationContent, PaginationPrevious, PaginationNext } from "../ui/pagination";


const MyDataTable = () => {
  const [data, setData] = useState(sampleData);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const performFiltering = () => {
    if (!searchTerm) {
      setFilteredData(data);
    } else {
      const searchTermLower = searchTerm.toLowerCase();
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTermLower) ||
          item.email.toLowerCase().includes(searchTermLower) ||
          item.role.toLowerCase().includes(searchTermLower)
      );
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    performFiltering();
  }, [searchTerm, currentPage]); // Combine both dependencies

  const getPagedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  };

  const renderTableRows = () => {
    return getPagedData().map((item, index) => (
      <TableRow key={item.id}>
        {Object.keys(item).map((key) => (
          <TableCell key={key}>{item[key]}</TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Table className="border  border-gray-200 divide-y divide-gray-200">
        <TableCaption>Data Table</TableCaption>
        <TableHeader>
          <TableRow>
            {Object.keys(sampleData[0]).map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{renderTableRows()}</TableBody>
      </Table>
      <Pagination
        className="mt-4"
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      >
        <PaginationContent>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MyDataTable;

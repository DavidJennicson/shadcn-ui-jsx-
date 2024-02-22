import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "../ui/table"; // Assuming this is the correct import path
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "../ui/pagination";
import { Badge } from "../ui/badge"; // Assuming this is the correct import path
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

const MyDataTable = ({ data }) => {
  const [filteredData, setFilteredData] = React.useState(data);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 50;

  // Calculate total pages based on the number of items and items per page
  const totalPages = filteredData ? Math.ceil(filteredData.length / itemsPerPage) : 0;

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle pagination page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to perform filtering based on search term
  const performFiltering = () => {
    if (!searchTerm) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // Function to get paginated data
  const getPagedData = () => {
    if (filteredData) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return filteredData.slice(startIndex, startIndex + itemsPerPage);
    } else {
      return [];
    }
  };

  // Function to render table rows based on filtered and paginated data
  const renderTableRows = () => {
    const pagedData = getPagedData();
    return pagedData.map((item, index) => (
      <TableRow key={index} className="rounded-lg">
        <TableCell className="h-12">
        {/* {item.role === "Developer" && <Badge variant="primary" className='ml-2' >Admin</Badge>}
          {item.role === "User" && <Badge variant="secondary" className='ml-2'>User</Badge>}
          {item.role === "Guest" && <Badge variant="accent">Guest</Badge>} */}
          {item.name}
          {/* Render badge based on role */}
          
        </TableCell>
        <TableCell className="h-12">{item.email}</TableCell>
        <TableCell className="h-12">{item.role}</TableCell>
      </TableRow>
    ));
  };  
  // Handle filtering when search term changes
  React.useEffect(() => {
    performFiltering();
  }, [searchTerm]);

  // Handle pagination when current page changes
  React.useEffect(() => {
    performFiltering();
  }, [currentPage]);

  return (
    <div>
      {/* Search input */}
      <Input placeholder="Search" className="w-1/2 mb-6" value={searchTerm} onChange={handleSearchChange} />
      <Table className="border border-base-50  ">
        <TableCaption>Data Table</TableCaption>
        <TableHeader>
          <TableRow>
           
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>{renderTableRows()}</TableBody>
      </Table>
      <Pagination
        className="mt-4"
        currentpage={currentPage}
        onPageChange={handlePageChange}
        totalpages={totalPages}
      >
        <PaginationContent>
          <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {/* You can render page numbers or additional pagination controls here */}
          <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MyDataTable;

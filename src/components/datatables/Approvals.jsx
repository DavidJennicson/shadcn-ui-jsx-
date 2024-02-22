import React, { useEffect, useState } from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

function Approvals() {
  const { contract } = useContract("");
  const { data, isLoading } = useContractRead(contract, "getAllCompanyDetails", []);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading && data) {
      setIsDataLoaded(true);
      console.log(data[0]);
    }
  }, [isLoading, data]);

  if (!isDataLoaded) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Product Category</TableHead>
            <TableHead>Document Status</TableHead>
            <TableHead>Owner Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.productDomain}</TableCell>
              <TableCell>
                {item.documentSubmitted ? (
                  item.status // Render status if document is submitted
                ) : (
                  <Badge>Not Submitted</Badge> // Render "Not Submitted" in a badge if document is not submitted
                )}
              </TableCell>
              <TableCell>{item.ownerName}</TableCell>
              <TableCell className="text-right"><Button className='bg-green-900'>Approve</Button> <Button>Reject</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Approvals;

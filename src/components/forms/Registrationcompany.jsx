import React, { useState } from 'react';
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../ui/select";

function Registrationcompany() {
  const { contract } = useContract("0xAa13a1f96731c87985C50A45BE9ae9b1fc0883C4");
  const { mutateAsync: registerNewCompany, isLoading } = useContractWrite(contract, "registerNewCompany");

  const [companyData, setCompanyData] = useState({
    companyName: "",
    phoneNumber: "",
    ownerName: "",
    productCategory: "",
    streetName: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCompanyData({ ...companyData, [id]: value });
  };

  const concatenateAddress = () => {
    const { streetName, city, state, zipCode } = companyData;
    return `${streetName}, ${city}, ${state} ${zipCode}`;
  };

  const handleSubmit = async () => {
    const { companyName, phoneNumber, ownerName, productCategory } = companyData;
    const location = concatenateAddress();
    try {
      const data = await registerNewCompany({ args: [companyName, productCategory, ownerName, location, phoneNumber] });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Register your Company</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="cname">Company name</Label>
              <Input id="companyName" type="text" onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phoneNumber">Phone number</Label>
              <Input id="phoneNumber" type="number" onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ownerName">Owner name</Label>
              <Input id="ownerName" type="text" onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="productCategory">Product Category</Label>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select the category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Chips</SelectItem>
                  <SelectItem value="dark">Savoury Based</SelectItem>
                  <SelectItem value="system">Drinks</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="streetName">Street name</Label>
              <Input id="streetName" type="text" onChange={handleChange} />
            </div>
            <div className="grid gap-2 grid-cols-3">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" type="text" placeholder="City" onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" type="text" placeholder="State" onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" type="text" placeholder="ZIP Code" onChange={handleChange} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleSubmit}>Create account</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Registrationcompany;

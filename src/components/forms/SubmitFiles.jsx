import React, { useState } from 'react';
import { useStorageUpload } from "@thirdweb-dev/react";
import { useContract, useContractWrite, useMetamask } from "@thirdweb-dev/react"; // Import useMetamask hook
import { useStorage } from "@thirdweb-dev/react";
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

function SubmitFiles() {
    const [panFile, setPanFile] = useState(null);
    const [foodSafetyFile, setFoodSafetyFile] = useState(null);
    const { mutateAsync: upload } = useStorageUpload();
    const { contract } = useContract("0xAa13a1f96731c87985C50A45BE9ae9b1fc0883C4");
    const { mutateAsync: submitDocuments, isLoading } = useContractWrite(contract, "submitDocuments");
    const { account } = useMetamask(); // Retrieve the Metamask account address
    
    // Define _companyAddress and _ipfsHashes based on your application logic
    const _companyAddress = account; // Use Metamask account address as company address
    const _ipfsHashes = ""; // Define or retrieve IPFS hashes as needed
  
    const call = async () => {
      try {
        const daata = await submitDocuments({ args: [_companyAddress, _ipfsHashes] });
        console.info("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err);
      }
    }
    
    const handlePanFileChange = (e) => {
        setPanFile(e.target.files[0]);
    };

    const handleFoodSafetyFileChange = (e) => {
        setFoodSafetyFile(e.target.files[0]);
    };

    const uploadData = async () => {
        // Prepare data to upload
        const dataToUpload = [];
        if (panFile) {
            dataToUpload.push(panFile);
        }
        if (foodSafetyFile) {
            dataToUpload.push(foodSafetyFile);
        }
        

        // Upload the data
        const uris = await upload({ data: dataToUpload });
        console.log(uris);
        try {
            const daata = await submitDocuments({ args: ["0xAd7aDcbA437eE2b8a8636daA28C92352EFb3a164", uris] });
            console.info("contract call successs", data);
          } catch (err) {
            console.error("contract call failure", err);
          }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadData();
    };

    return (
        <div className="flex justify-center items-center h-full">
            <Card className="w-1/2">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Upload Documents</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-2">
                            <Label htmlFor="panFile">Upload PAN</Label>
                            <Input id="panFile" type="file" onChange={handlePanFileChange} />
                        </div>
                        <div className="mt-4 grid gap-2">
                            <Label htmlFor="foodSafetyFile">Upload Food Safety Form</Label>
                            <Input id="foodSafetyFile" type="file" onChange={handleFoodSafetyFileChange} />
                        </div>
                        <Button className="w-full mt-4" type="submit">Submit Documents</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default SubmitFiles;

  import React from 'react'

  import { Button } from "../ui/button";
  import {
    Card,
    CardContent,
    CardDescription,
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
    } from "@/components/ui/select"
  function Productcompanyreg() {
    return (
      <>
      <div className="flex justify-center items-center h-full ">
          <Card className="w-1/2">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Register a Product</CardTitle>
        
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
          
          </div>
      
          <div className="grid gap-2">
            <Label htmlFor="email">Product name</Label>
            <Input id="text" type="" placeholder="Product name" />
          </div>
      
        
          <div className="grid gap-2">
            <Label htmlFor="password">Product Category</Label>
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
          <Label htmlFor="picture">Upload HACCP Form </Label>
        <Input id="picture" type="file"  />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="picture">Upload Food Safety Form </Label>
        <Input id="picture" type="file"  />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="picture">Upload Recall Form </Label>
        <Input id="picture" type="file"  />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="picture">Upload Nutrient </Label>
        <Input id="picture" type="file"  />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Register Product</Button>
        </CardFooter>
      </Card>
      </div>
      </>
    )
  }

  export default Productcompanyreg
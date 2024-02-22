import React from "react";

import { MainNav } from "./MainNav";

import { Search } from "./Search";
import TeamSwitcher from "./TeamSwitcher";
import { UserNav } from "./UserNav";
import Dash1 from "./Dash1";




function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
  
      
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <Dash1/>  
        </div>
    </>
  );
}

export { DashboardPage };

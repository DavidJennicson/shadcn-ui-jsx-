import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import './App.css'
import { Sepolia } from "@thirdweb-dev/chains";
import { DashboardPage } from './components/dashboard/DashboardPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyDataTable from './components/datatables/MyDataTable'
import { ThemeProvider } from "./components/ui/theme-provider"
import { DemoNotifications } from './components/cards/DemoNotifications'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import LoginRegisterForm from './components/authentication/LoginRegisterForm'
import ModeToggle from './components/ui/ModeToggle'
import Registrationcompany from './components/forms/Registrationcompany'
import Productcompanyreg from './components/forms/Productcompanyreg'
import { useNavigate } from 'react-router-dom';


import {
 
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import Admindash from './components/dashboard/Admindash';
import Approvals from './components/datatables/Approvals';
import SubmitFiles from './components/forms/SubmitFiles';

function App() {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    // Navigate to the desired route when the button is clicked
    navigate('/reg');
  };
  const SampleData = [
    { name: "John Doe", email: "john@example.com", role: "Developer" },
    { name: "Jane Smith", email: "jane@example.com", role: "Designer" },
    { name: "Mike Johnson", email: "mike@example.com", role: "Manager" },
    // Add more sample data as needed
  ];
  
  // Generate additional 100 entries
  for (let i = 0; i < 100; i++) {
    SampleData.push({
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: "User"
    });
  }

  return (
    <>
    
        <ThirdwebProvider
      activeChain={ Sepolia }
      clientId="2f0f76a5c5b6d36f1f3a9865c1fe5c89"
   
      supportedWallets={[
        metamaskWallet(),
        localWallet(),
      ]}
    >
      
      
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <BrowserRouter>
     <ConnectWallet
        theme={"light"}
        modalSize={"wide"}
      />
       <ModeToggle/>
       
     <Routes>
    
      
<Route path='/ap' element={<Approvals/>} />
<Route path='/reg' element={<Productcompanyreg/>}/>
<Route path='/' element={<Admindash/>} /> 
<Route path='/q' element={<Registrationcompany/>} />
  </Routes>
    </BrowserRouter>
  </ThemeProvider>
 
  </ThirdwebProvider>
 
    </>
  )
}

export default App

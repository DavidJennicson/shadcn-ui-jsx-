import * as React from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../ui/navigation-menu"

const LoginForm = ({ onRegisterClick }) => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with:", username, password)
  }

  return (
       <div className="flex flex-col gap-4 border border-zinc-800 p-8 rounded-lg">
      <h1 className="text-3xl font-bold text-left mb-8">Login</h1>
      <Label className='text-left' htmlFor="username">Username</Label>
      <Input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <Label className='text-left' htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <Button onClick={handleLogin}>Login</Button>
      <p>
        Don't have an account?{" "}
        <a onClick={onRegisterClick}>Register</a>
      </p>
    </div>
  )
}

const RegistrationForm = ({ onLoginClick }) => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [email, setEmail] = React.useState("")

  const handleRegister = () => {
    // Handle registration logic here
    console.log("Registering with:", username, email, password)
  }

  return (
    <div className="flex border border-zinc-800 p-8 rounded-lg flex-col gap-4">
      <h1 className="text-left mb-8 font-bold text-3xl">Registration</h1>
      <Label className='text-left' htmlFor="reg-username">Username</Label>
      <Input
        id="reg-username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Choose a username"
      />
      <Label className='text-left' htmlFor="reg-email" >Email</Label>
      <Input
        id="reg-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <Label className='text-left' htmlFor="reg-password">Password</Label>
      <Input
        id="reg-password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Choose a password"
      />
      <Button onClick={handleRegister}>Register</Button>
      <p>
        Already have an account?{" "}
        <a onClick={onLoginClick}>Login</a>
      </p>
    </div>
  )
}

const LoginRegisterForm = () => {
  const [isLoginForm, setIsLoginForm] = React.useState(true)

  return (
    <div className="flex   flex-col gap-4">
    
      {isLoginForm ? (
        <LoginForm onRegisterClick={() => setIsLoginForm(false)} />
      ) : (
        <RegistrationForm onLoginClick={() => setIsLoginForm(true)} />
      )}
    </div>
  )
}

export default LoginRegisterForm

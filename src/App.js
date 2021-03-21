import React,{useState} from "react"
import './App.css'
import SignUp from './views/SignUp'
import SignIn from './views/SignIn';
import Dashboard from "./views/Dashboard";

function App() {
  const [navigation,setNevigation] = useState('signup')
  const navigate = (routeName) =>{
    setNevigation(routeName)
  }
  
  return (
    <div className="App">
      {navigation === 'signup' && <SignUp navigate={navigate}/>}
      {navigation === 'signin' && <SignIn navigate={navigate}/>}
      {navigation === 'dashboard' && <Dashboard navigate={navigate}/>}
    </div>
  );
}

export default App;

import './App.css'
import Account from "./components/Account"
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import { Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element= {<SignIn />} />
      <Route path='/SignUp' element= {<Account />} />
      <Route path='/Dashboard' element= { <Dashboard />} />
      
    </Routes>
  )
}

export default App

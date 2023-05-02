import './App.css'
import Account from "./components/Account"
import SignIn from './components/SignIn'
import { Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element= {<SignIn />} />
      <Route path='/SignUp' element= {<Account />} />
    </Routes>
  )
}

export default App

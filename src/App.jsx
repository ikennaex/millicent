import './App.css'
import {Routes, Route} from "react-router-dom"
import Landingpage from './Homepage/Landingpage/Landingpage'
import SignUp from './Pages/SignUpPage/SignUp'
import Navbar from './Homepage/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path = "/signup" element = {<SignUp />} />
    </Routes>
    </div>
  )
}

export default App

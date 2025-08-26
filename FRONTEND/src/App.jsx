import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <>

      <Router>

        <Routes>

          {/* main layout */}
          <Route element={<MainLayout />}>

            <Route index element={<Home />} />  {/* home route */}

          </Route>

        </Routes>

      </Router>

    </>
  )
}

export default App
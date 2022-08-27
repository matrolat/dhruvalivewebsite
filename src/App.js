import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Team from './Pages/Team/Team'
import Contact from './Pages/Contact/Contact'
import Events from './Pages/Events/Events'
import Merch from './Pages/Merch/Merch'
import Footer from './Components/Footer/Footer';
import Quiz from './Pages/Quiz/Quiz'
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <ToastContainer />
        <Routes>
        <Route  path="/dhruvalivewebsite" element={<Home />} />
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/merch" element={<Merch/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;

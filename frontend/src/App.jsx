import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { DonateFood } from './Pages/Donate';
import { AdminPage } from './Pages/Admin';
import About from './Pages/About';
import { Contact } from './Pages/Contact';
import { RequestFood } from './Pages/Request';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/donate" element={<DonateFood />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<RequestFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Link } from "react-router-dom";
import { Footer } from "../Componants/Footer";
import { Navbar } from "../Componants/Navbar";
import { AiOutlineClose } from "react-icons/ai";
import { DashCard } from "../Componants/Dash-card";

export const AdminPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="dash-container">
          <div className="sidebar">
            <div className="dash-head">
              <h2>Admin Dashboard</h2>
              <AiOutlineClose className="close" />
            </div>
            <div className="dashboard">
              <Link >Dashboard</Link>
              <Link  >Pending Donations</Link>
              <Link >Previous Donations</Link>
              <Link >My Profile</Link>
              <button type="button" className="btn">Logout</button>
            </div>
          </div>
          <DashCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

import { Link } from "react-router-dom";
import { Footer } from "../Componants/Footer";
import { Navbar } from "../Componants/Navbar";
import { AiOutlineClose } from "react-icons/ai";

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
              <Link >Pending Donations</Link>
              <Link >Previous Donations</Link>
              <Link >My Profile</Link>
              <button type="button" className="btn">Logout</button>
            </div>
          </div>

          <div className="dashboard-content">
            <h3>Welcome to Admin Panel</h3>
            <p>
              This is where you can manage donors, receivers, donations, and see platform analytics.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

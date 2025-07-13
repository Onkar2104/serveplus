import { useState } from "react";
import { Footer } from "../Componants/Footer";
import { Navbar } from "../Componants/Navbar";

export const DonateFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    foodItem: "",
    foodType: "",
    quantity: "",
    address: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))

  }
  const getDonatedData = (event) => {
    event.preventDefault();
    console.log(formData) //// get formData to save to db
  }
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="donate text-center">
          <div className="upper mb-4">
            <h1 className="head">THANKS FOR BIG HAND</h1>
            <video src="assests/videos/donate.mp4" className="img-fluid donate-img my-3" autoPlay muted loop playsInline />
            <p className="thank-text">"Thank you for extending your hand to feed someone in need. Your kindness fills more than stomachs—it fills hearts."<br />— ServePlus Team</p>
          </div>

          <div className="lower">
            <h3 className="mb-3">FOOD DONATION</h3>
            <form action="" onSubmit={getDonatedData} >
              <input type="text" placeholder="Name" className="form-control mb-3 w-75 m-auto" name="name" required onChange={handleChange} />
              <input type="email" placeholder="Email" className="form-control mb-3 w-75 m-auto" name="email" required onChange={handleChange} />
              <input type="tel" placeholder="Phone" className="form-control mb-3 w-75 m-auto" name="phone" required onChange={handleChange} />
              <div className="row justify-content-center mb-3">
                <div className="col-3 m-auto"><input type="text" placeholder="Food Item" className="form-control" name="foodItem" required onChange={handleChange} /></div>
                <div className="col-3 m-auto"><select className="form-control" name="foodType" required onChange={handleChange}><option value="">Select Food Type</option><option value="veg">Vegetarian</option><option value="nonveg">Non-Vegetarian</option><option value="packaged">Packaged</option></select></div>
              </div>
              <input type="text" placeholder="Quantity in KG" className="form-control mb-3 w-75 m-auto" name="quantity" required onChange={handleChange} />
              <input type="text" placeholder="PickUp Address" className="form-control mb-3 w-75 m-auto" name="address" required onChange={handleChange} />
              <input type="date" placeholder="PickUp Date" className="form-control mb-3 w-75 m-auto" name="date" required onChange={handleChange} />
              <button type="submit" className="hero-btn w-25 m-3 w-sm-15">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

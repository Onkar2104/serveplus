import { Footer } from "../Componants/Footer";
import { Navbar } from "../Componants/Navbar";

const About = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                <section className="text mb-1 p-5">
                    <h1 className="display-4 fw-bold text-secondary">About ServePlus</h1>
                    <p className="lead ">
                        ServePlus is a smart donation platform that connects <strong>donors</strong> with <strong>receivers</strong> efficiently.
                        Our goal is to make the donation process simple, trackable, and transparent.
                    </p>
                </section>
                <div className="text-center ">
                    <section className="row col-12 d-flex justify-content-center w-100 mt-2 text-center">
                        <div className="col-md-4 col-lg-8 ">
                            <div className="card w-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-success">📦 Easy Donations</h5>
                                    <p className="card-text">
                                        Donors can quickly list items for donation and track their status in real-time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-8 mt-3 text-center">
                            <div className="card w-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-info">🔄 Transparent Matching</h5>
                                    <p className="card-text">
                                        Our system matches verified receivers with the right donations based on location and need.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-8 mt-3 text-center">
                            <div className="card w-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-warning">📊 Admin Dashboard</h5>
                                    <p className="card-text">
                                        The admin panel provides analytics, manages user data, and tracks donation history.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="mt-5">
                    <h3 className="text-center mb-4">Our Mission</h3>
                    <p className="text-muted  mx-auto" style={{ maxWidth: "800px" }}>
                        We aim to build a bridge between people who have resources and those in need. Whether it's clothes,
                        food, or essentials, ServePlus ensures that your donations reach the right hands at the right time.
                    </p>
                </section>

                <section className="mt-5 text-center">
                    <h4 className="mb-3">Meet the Developers</h4>
                    <p className="text-muted">Crafted with ❤️ by a passionate team of engineers who care.</p>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default About;

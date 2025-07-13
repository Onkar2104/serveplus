import { InfoCard } from "./InfoCard";
import { Navbar } from "./Navbar";
import { useEffect, useRef } from "react";

export const HeroSection = () => {
    const leftContentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = leftContentRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                if (isVisible) {
                    element.classList.add("animate-slide-up");
                } else {
                    element.classList.remove("animate-slide-up");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="navbar-overlay">
                <Navbar />
            </div>
            <div className="hero-container">
                <div className="hero-image-container">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5612AQEm2Zu2cNP_wQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1683118367751?e=2147483647&v=beta&t=zUZheGQjjnDXaBNiiaDKD5m-Tv3r42ydS3UgD0Oyb2w"
                        alt="food"
                        className="hero-image"
                    />
                    <div className="hero-text-overlay">
                        <h2>ServePlus: Share Surplus, Serve Smiles</h2>
                        <p>Join our mission to eliminate food waste and feed communities in need.</p>
                        <a href="/donate" className="hero-btn">Donate Now</a>
                        <a href="/request" className="zero-btn">Request Food</a>
                    </div>
                </div>
            </div>
            <InfoCard />
            <div className="spirit-info">
                <div className="content">
                    <div className="left-content" ref={leftContentRef}>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/018/991/627/non_2x/people-giving-a-donation-box-with-food-for-charity-and-solidarity-vector.jpg"
                            alt="Donate food"
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                    </div>
                    <div className="right-content" >
                        <h1>Every Meal Matters</h1>
                        <p>
                            Millions go to bed hungry while tons of food go to waste daily. Your simple act of kindness—
                            donating surplus food—can bring a smile to someone’s face. Join us in creating a hunger-free world.
                        </p>
                        <p>
                            Don’t let good food end up in the trash. Share it, serve it, save lives.
                        </p>
                        <a href="donate" className="donate-now-btn">Donate Now</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr />
                <div className="work-head text-center mb-4">
                    <h1>What Our Partners Say</h1>
                    <div className="partner dash-head">
                        <video src="/assests/videos/hair-cut.mp4" autoPlay muted loop playsInline />
                        <p>
                            “ServePlus has transformed the way we handle food surplus. What used to go to waste now goes into the hands of people   who truly need it. It’s more than just a platform—it’s a movement of compassion and community.”
                            <br />
                            <strong>- ServePlus Foundation, Barshi</strong>
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="container">
                <div className="served">
                    <div className="one">
                        <label htmlFor="saved">12,500</label>
                        <p id="saved">Meals Saved</p>
                    </div>
                    <div className="one">
                        <label htmlFor="donors">500</label>
                        <p id="donors">Active Donors</p>
                    </div>
                    <div className="one">
                        <label htmlFor="NGO">350</label>
                        <p id="NGO">Partner NGOs</p>
                    </div>
                </div>
            </div>
        </>
    );
};

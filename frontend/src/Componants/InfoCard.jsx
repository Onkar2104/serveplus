import { FaRegUser } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const InfoCard = () => {
    return (
        <div className="container">
            <div className="working">
                <div className="work-container">
                    <div className="work-head text-center mb-4">
                        <h1>HOW IT WORKS</h1>
                    </div>
                    <div className="work-info row justify-content-center">
                        <div className="col-md-4 col-lg-3 col-sm-6 col-12 d-flex justify-content-center mb-4">
                            <div className="card">
                                <div className="card-top">
                                    <FaRegUser />
                                </div>
                                <div className="card-text">
                                    <p>Register as donor or recipient</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6 col-12 d-flex justify-content-center mb-4">
                            <div className="card">
                                <div className="card-top">
                                    <FaRegListAlt />
                                </div>
                                <div className="card-text">
                                    <p>Post or browse available food listing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6 col-12 d-flex justify-content-center mb-4">
                            <div className="card">
                                <div className="card-top">
                                    <FaLocationDot />
                                </div>
                                <div className="card-text">
                                    <p>Coordinates pickup or delivery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

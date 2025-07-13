import { useState } from "react";
import { Footer } from "../Componants/Footer";
import { Navbar } from "../Componants/Navbar";

export const Contact = () => {
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const getDetail = ((event) => {
        event.preventDefault();
        console.log({ email, comment })
    })
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <div className="bg-dark text-white rounded p-5 shadow-lg mx-auto w-75">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <hr className="border-secondary mb-4" />
                    <form action="/" className="space-y-4" onSubmit={getDetail}>
                        <div>
                            <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="comment" className="form-label"><strong>Comment</strong></label>
                            <textarea
                                id="comment"
                                maxLength={300}
                                required
                                className="form-control"
                                rows="4"
                                placeholder="Write your comment..."
                                value={comment}
                                onChange={(c) => setComment(c.target.value)}
                            ></textarea>
                            <div className="form-text text-light">Max 300 characters</div>
                        </div>
                        <button type="submit" className="btn btn-secondary w-100 mt-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

import { Footer } from "../Componants/Footer"
import { Navbar } from "../Componants/Navbar"

export const RequestFood = () => {
    return <>
        <Navbar />
        <div className="container py-5">
            <div className=" text-white rounded p-5 shadow-lg mx-auto w-50 bgbg">
                <h2 className="text-center mb-4">Request Food</h2>
                <hr className="border-secondary mb-4" />
                <form action="/" className="space-y-4">
                    <div>
                        <label htmlFor="Name" className="form-label"><strong>Name</strong></label>
                        <input
                            type="Name"
                            id="Name"
                            required
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input
                            id="email"
                            maxLength={300}
                            required
                            className="form-control"
                            rows="4"
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="Phone" className="form-label"><strong>Phone</strong></label>
                        <input
                            id="Phone"
                            maxLength={10}
                            required
                            className="form-control"
                            rows="4"
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="Address" className="form-label"><strong>Address</strong></label>
                        <input
                            id="Address"
                            maxLength={300}
                            required
                            className="form-control"
                            rows="4"
                        ></input>
                    </div>
                    <button type="submit" className="btn btn-secondary w-100 mt-3">
                        Send Request
                    </button>
                </form>
            </div>
        </div>
        <Footer />
    </>
}
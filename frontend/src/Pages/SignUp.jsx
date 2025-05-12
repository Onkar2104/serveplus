import { useState } from "react";

export const SignUp=()=>{
        const [userType, setUserType] = useState('donor');
    return<>
        <div className="loginContainer">
            <div className="login-form">
                <div className="login-right">
                    <h2 className="brand-1">ServePlus</h2>
                    <div className="user-type-toggle">
                        <button className={userType === 'donor' ? 'active' : ''} onClick={() => setUserType('donor')}>Donor</button>
                        <button className={userType === 'charity' ? 'active' : ''} onClick={() => setUserType('charity')}>Charity</button>
                    </div>
                    <form className="login-fields">
                        {userType === 'donor' ? (
                            <>
                                <label htmlFor="donorName">Name</label>
                                <input type="text" id="donorName" placeholder="Donor Name" />
                                <label htmlFor="Address">Address</label>
                                <input type="text" id="Address" placeholder="Donor Address" />

                            </>
                        ) : (
                            <>
                                <label htmlFor="charityName">Name</label>
                                <input type="text" id="charityName" placeholder="Charity Name" />
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" placeholder="Charity Address" />
                            </>
                        )}
                        <label htmlFor='mail'>Email</label>
                        <input type="email" placeholder="Enter email" id='mail'/>
                        <label htmlFor='pass'>Password</label>
                        <input type="password" placeholder="Enter password" id='pass'/>
                        <button className="login-btnn">Register</button>
                        <p className="forgot">Forgot password?</p>
                        <p className="register">Already have an account? <a href="/login">Login</a></p>
                    </form>
                </div>
                <div className="login-left">
                    <img src="../assests/images/loginLeft.png" alt="Give Hope Get Help" />
                </div>
            </div>
        </div>
    </>
}
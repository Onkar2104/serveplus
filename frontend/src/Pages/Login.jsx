import React, { useState } from 'react';

export const Login = () => {
    const [userType, setUserType] = useState('donor');

    return (
        <div className="loginContainer">
            <div className="login-form">
                <div className="login-left">
                    <img src="../assests/images/loginLeft.png" alt="Give Hope Get Help" />
                </div>
                <div className="login-right">
                    <h2 className="brand">ServePlus</h2>
                    <div className="user-type-toggle">
                        <button className={userType === 'donor' ? 'active' : ''} onClick={() => setUserType('donor')}>Donor</button>
                        <button className={userType === 'charity' ? 'active' : ''} onClick={() => setUserType('charity')}>Charity</button>
                    </div>
                    <form className="login-fields">
                        {userType === 'donor' ? (
                            <>
                                <label htmlFor="donorName">Name</label>
                                <input type="text" id="donorName" placeholder="Donor Name" />
                            </>
                        ) : (
                            <>
                                <label htmlFor="charityName">Name</label>
                                <input type="text" id="charityName" placeholder="Charity Name" />
                            </>
                        )}
                        <label htmlFor='mail'>Email</label>
                        <input type="email" placeholder="Enter email" id='mail'/>
                        <label htmlFor='pass'>Password</label>
                        <input type="password" placeholder="Enter password" id='pass'/>
                        <button className="login-btnn">Login</button>
                        <p className="forgot">Forgot password?</p>
                        <p className="register">Don’t have an account? <a href="/register">Register</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

import React, { useEffect, useState } from "react"
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);
    const { pathname } = useLocation();
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return (() => {
            window.removeEventListener('scroll', isActive);
        })
    }, []);

    const currentUser = {
        id: 1,
        username: "Jhon Doe",
        isSeller: true,
    }
    return (
        <div className={active || pathname !== "/" ? "nav-bar active" : "nav-bar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="Link">
                        <span className="text">Fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    <span>Sign In</span>
                    {!currentUser && <button>Join</button>}
                    {currentUser && (<>
                        <div className="user" onClick={() => setShow(!show)}>
                            <img src="https://images.unsplash.com/photo-1468528885091-58bab38a6632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGxldHRlciUyMEp8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="User-Photo" />
                            <span>{currentUser?.username}</span>
                            {show && <div className="options">
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <Link className="Link" to="/mygigs">Gigs</Link >
                                            <Link className="Link" to="/add">Add New Gig</Link >
                                        </>
                                    )
                                }

                                <Link className="Link" to="/orders">Orders</Link >
                                <Link className="Link" to="/messages" >Messages</Link >
                                <Link className="Link" to="/" >Logout</Link >
                            </div>}
                        </div>
                    </>)}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="Link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="Link menuLink" to="/">
                            Video & Animation
                        </Link>
                        <Link className="Link menuLink" to="/">
                            Writing & Translation
                        </Link>
                        <Link className="Link menuLink" to="/">
                            AI Services
                        </Link>
                        <Link className="Link menuLink" to="/">
                            Digital Marketing
                        </Link>
                        <Link className="Link menuLink" to="/">
                            Music & Audio
                        </Link>
                        <Link className="Link menuLink" to="/">
                            Programming & Tech
                        </Link>
                        <Link className="Link menuLink" to="/">
                            Business
                        </Link>
                        <Link className="Link menuLink" to="/">
                            Lifestyle
                        </Link>
                    </div>
                    <hr />
                </>
            )}

        </div>
    )
}

export default Navbar;
import React from "react"
import "./Featured.css"
const Featured = () => {
    return (
        <div className="featured">
            <div className="fetured-container">
                <div className="left">
                    <h1>Find the right <i>freelance service</i>, right away</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="search-icon" />
                            <input type="text" placeholder="Search for any service..." />
                        </div>
                        <button>search</button>
                    </div>
                    <div className="popular">
                        <span>Popular :</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="man=image" />
                </div>
            </div>
        </div>
    )
}

export default Featured;

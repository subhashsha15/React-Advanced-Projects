import React, { useState } from "react";
import "./Gigs.css"
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard"
const Gigs = () => {
    const [sortByopen, setSortByOpen] = useState(false);
    const [sortBy, setSortBy] = useState("sales");

    const reSort = (type) => {
        setSortBy(type);
        setSortByOpen(false);
    }
    return (
        <div className="gigs">
            <div className="gigs-container">
                <span className="gigs-container-breadcrumbs">FIVERR &gt; GRAPHICS & DESIGN &gt; </span>
                <h1>AI Artists</h1>
                <p>Explore the boundaries of art and technolgy with Fiverr's AI artists</p>
                <div className="gigs-container-menu">
                    <div className="gigs-container-menu-left">
                        <span>Budged</span>
                        <input type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                        <button>Apply</button>
                    </div>
                    <div className="gigs-container-menu-right">
                        <span className="gigs-container-menu-right-sortBy">SortBy:-</span>
                        <span className="gigs-container-menu-right-sortType">{sortBy === "sales" ? "Best Selling" : "Newest"}</span>
                        <img src="./img/down.png" alt="" onClick={() => { setSortByOpen(!sortByopen) }} />
                        {sortByopen && (<div className="gigs-container-menu-rightMenu">
                            {sortBy === "sales" ? <span onClick={() => { reSort("createdAt") }}>Newest</span>
                                : <span onClick={() => { reSort("sales") }}>Best Selling</span>}
                        </div>)}
                    </div>
                </div>
                <div className="gigs-cards">
                    {gigs.map((gig) => <GigCard key={gig.id} item={gig} />)}
                </div>
            </div>
        </div>
    )
}

export default Gigs;
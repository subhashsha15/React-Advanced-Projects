import React from "react";
import "./CatCard.css"
import { Link } from "react-router-dom";
const CatCard = ({ item }) => {
    return (
        <Link to="/gig?cat=design">
            <div className="catcard">
                <img src={item.img} alt="" />
                <span className="desc">{item.desc}</span>
                <span className="title">{item.title}</span>
            </div>
        </Link>
    )
}

export default CatCard;
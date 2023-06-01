import React from "react";
import "./GigCard.css"
import { Link } from "react-router-dom";
const GigCard = ({ item }) => {
    return (
        <Link to="/gig/123" className="Link">
            <div className="gigCard">
                <img src={item.img} alt="" />
                <div className="gigCard-info">
                    <div className="gigCard-info-user">
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="gigCard-info-star">
                        <img src="./img/star.png" alt="" />
                        <span>{item.star}</span>
                    </div>
                </div>
                <hr />
                <div className="gigCard-details">
                    <img src="./img/heart.png" alt="" />
                    <div className="gigCard-details-price">
                        <span>STARTING AT</span>
                        <h2>&#36; {item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GigCard;
import React from "react";
import "./ProjectCard.css"
import { Link } from "react-router-dom";
const ProjectCard = ({ item }) => {
    return (
        <Link to="/gig?cat=design" className="Link">
            <div className="projectcard">
                <img src={item.img} alt="" />
                <div className="projectcard-info">
                    <img src={item.pp} alt="" />
                    <div className="projectcard-texts">
                        <h2>{item.cat}</h2>
                        <span>{item.username}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;
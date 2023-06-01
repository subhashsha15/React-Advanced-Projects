import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import "./Home.css"
import ProjectCard from "../../components/projectCard/ProjectCard";
import Gigs from "../gigs/Gigs";

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={4} >
                {cards.map(card => (
                    <CatCard item={card} key={card.id} />
                ))}
            </Slide>
            <div className="Home-features">
                <div className="Home-container">
                    <div className="Home-features-left">
                        <h1>The best part? Everything.</h1>
                        <div className="Home-item">
                            <div className="Home-title">
                                <img src="./img/check.png" alt="" />
                                Stick to your budget
                            </div>
                            <p>
                                Find the right service for every price point.
                                No hourly rates, just project-based pricing.
                            </p>
                        </div>
                        <div className="Home-item">
                            <div className="Home-title">
                                <img src="./img/check.png" alt="" />
                                Get quality work done quickly
                            </div>
                            <p>
                                Hand your project over to a talented freelancer in minutes, get long-lasting results.
                            </p>
                        </div>
                        <div className="Home-item">
                            <div className="Home-title">
                                <img src="./img/check.png" alt="" />
                                Pay when you're happy
                            </div>
                            <p>
                                Upfront quotes mean no surprises. Payments only get released when you approve.
                            </p>
                        </div>
                        <div className="Home-item">
                            <div className="Home-title">
                                <img src="./img/check.png" alt="" />
                                Count on 24/7 support
                            </div>
                            <p>
                                Our round-the-clock support team is available to help anytime, anywhere.
                            </p>
                        </div>
                    </div>
                    <div className="Home-features-right">
                        <video src="/img/video.mp4" controls></video>
                    </div>
                </div>
            </div>
            {/* *********************************************************************************** */}
            <div className="Home-features dark">
                <div className="dark-Home-container">
                    <div className="dark-Home-features-left">
                        <h1>fiverr <span>business</span>.</h1>
                        <h1>A solution built for <i>business</i></h1>
                        <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>

                        <div className="Home-title">
                            <img src="./img/check.png" alt="" />
                            Talent matching
                        </div>

                        <div className="Home-title">
                            <img src="./img/check.png" alt="" />
                            Dedicated account management
                        </div>

                        <div className="Home-title">
                            <img src="./img/check.png" alt="" />
                            Team collaboration tools
                        </div>

                        <div className="Home-title">
                            <img src="./img/check.png" alt="" />
                            Business payment solutions
                        </div>
                        <button>Explore Fiverr Business</button>
                    </div>
                    <div className="Home-features-right">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
                    </div>
                </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4} >
                {projects.map(card => (
                    <ProjectCard item={card} key={card.id} />
                ))}
            </Slide>
            <Gigs />
        </div>
    )
}

export default Home;
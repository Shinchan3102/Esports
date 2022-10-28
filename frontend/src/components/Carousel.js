import React from "react";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";
import "./css/style.css";

function Carousel() {
    return (
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{width:'15px',height:'15px',borderRadius:'50%'}}></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style={{width:'15px',height:'15px',borderRadius:'50%'}}></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" style={{width:'15px',height:'15px',borderRadius:'50%'}}></button>
            </div>
            <div className="carousel-inner carouselCss">
                <div className="carousel-item active">
                    <img src={bg1} className="d-block vw-100 mx-auto opacity-0.5" style={{opacity:'0.6'}} alt="bg1"/>
                        <div className="carousel-caption position-absolute top-0 h-100 d-flex align-items-center justify-content-center">
                            <div>
                            <h1 style={{fontSize:'60px',textShadow:'2px 2px 5px black'}}>JOIN US NOW</h1>
                            </div>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={bg2} className="d-block vw-100 mx-auto" style={{opacity:'0.6'}} alt="bg2"/>
                        <div className="carousel-caption position-absolute top-0 vh-100 d-flex align-items-center justify-content-center">
                            <div>
                            <h1 style={{fontSize:'60px',textShadow:'2px 2px 5px black'}}>JOIN US NOW</h1>
                            </div>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={bg3} className="d-block vw-100 mx-auto" style={{opacity:'0.6'}} alt="bg3"/>
                        <div className="carousel-caption position-absolute top-0 vh-100 d-flex align-items-center justify-content-center">
                            <div>
                            <h1 style={{fontSize:'60px',textShadow:'2px 2px 5px black'}}>JOIN US NOW</h1>
                            </div>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{zIndex:'0'}}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
};

export default Carousel;
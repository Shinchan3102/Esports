import React from "react";
import "./css/style.css";
import bg from "./assets/bgimg4.jpg";
import bg_ from "./assets/bgimg5.jpg"
import img_about from "./assets/img1.jpg";
import img_vision from "./assets/img2.jpg"

function Notice() {
    return (
        <>
            <div className="noticeCss" style={{ background: `url(${bg})` }}>
                <h1>Notices</h1>
                <ul>
                    <li>
                        <a className="" href="/">First Notice</a>
                    </li>
                    <li>
                        <a className="" href="/">Second Notice</a>
                    </li>
                    <li>
                        <a className="" href="/">Third Notice</a>
                    </li>
                </ul>
            </div>
            <div className="aboutCss aboutCont" style={{ background: `url(${bg_})` }}>
                    <div>
                    <h1 style={{ margin: '30px 0px'}}>About Us</h1>
                        <p>
                            your about us section
                        </p>
                    </div>
                    <img src={img_about} alt="about" style={{ width: '400px', margin: '60px 0px' }} />
            </div>
            <div className="aboutCss aboutCont" style={{ background: `url(${bg_})` }}>
                    <div>
                    <h1>Vision</h1>
                        <p>
                            Our basic rule is who wants job in our company we never hire them. The candidates who have passion on Esports they only work with us Because we think Passion more important than job. If we gave a job to them they will work for money. If we provide their passion, they fought for growth. So we strongly believe that we will make strong team for our company. To take over huge margin in Esports all across the world.
                            <br/>
                            &emsp &emsp &emsp By the year 2027, <b>Esports Company</b> will know by maximum people across the world. Our Team will work for Cause by means to take over huge margin in world Esports. Our Vision is to provide world - class Connections, Proper Facilities to everyone who believed us. We are here for not only gaining profit. We are here for mainly Recognition & Living for a lng period in the hearts people all across the world.
                        </p>
                    </div>
                    <img src={img_vision} alt="about" style={{ width: '400px',height:'300px'}} />
            </div>
        </>
    )
}

export default Notice;
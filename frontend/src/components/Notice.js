import React from "react";
import "./css/style.css";
import bg from "./assets/bgimg4.jpg";
import bg_ from "./assets/bgimg5.jpg";
import img_about from "./assets/img1.jpg";
import img_vision from "./assets/img2.jpg"

function Notice() {
    return (
        <>
            <div className="noticeCss" style={{ background: `url(${bg})`,boxShadow:'2px 2px 6px white'}}>
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
            <div className="aboutCss aboutCont" style={{ background: `url(${bg_})`,boxShadow:'2px 2px 6px white'}}>
                    <div>
                    <h1 style={{ margin: '30px 0px'}}>About Us</h1>
                        <p>
                            <b>Name called a company Esports. Electronic sports</b>, is a form of competition using video games. Esports often takes the form of organized, Multiplayer video game competitions, particularly between Not Only professional players, individually or as teams, Even Non-professional players also get major importance why because our company is mainly focus on each everyone in the world. Although organized competitions have long been a part of Esport culture: when participation by professional gamers and spectatorship in these events through live streaming saw a large surge in popularity.<br/>
                            &emsp &emsp &emsp From 2023 to 2025 we mainly focus on the most populated country India. In this Span of two years, Our declared a war against India in Esports to conquer total India. Believe on our company way of approach to achieve it. Is to different which never before done.<br/>
                            &emsp &emsp &emsp After this, By the Year 2027, Esports Company will take over a huge margin in ESports culture all across the world. The fact is that No- One will never stop if we get appreciation from people. Our company is mainly <b>Addictive property.</b>

                        </p>
                    </div>
                    <img src={img_about} alt="about" style={{margin: '60px 0px' }} />
            </div>
            <div className="aboutCss aboutCont" style={{ background: `url(${bg_})`,boxShadow:'2px 2px 6px white'}}>
                    <div>
                    <h1>Vision</h1>
                        <p>
                            Our basic rule is who wants job in our company we never hire them. The candidates who have passion on Esports they only work with us Because we think Passion more important than job. If we gave a job to them they will work for money. If we provide their passion, they fought for growth. So we strongly believe that we will make strong team for our company. To take over huge margin in Esports all across the world.
                            <br/>
                            &emsp &emsp &emsp By the year 2027, <b>Esports Company</b> will know by maximum people across the world. Our Team will work for Cause by means to take over huge margin in world Esports. Our Vision is to provide world - class Connections, Proper Facilities to everyone who believed us. We are here for not only gaining profit. We are here for mainly Recognition & Living for a lng period in the hearts people all across the world.
                        </p>
                    </div>
                    <img src={img_vision} alt="about" style={{height:'300px'}} />
            </div>
        </>
    )
}

export default Notice;
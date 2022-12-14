import React from "react";
import bg1 from "./assets/bgimage7.jpg";
import bg2 from "./assets/bgimg8.jpg";
import bg3 from "./assets/bgimage9.jpg";
import bg_ from "./assets/bgimg5.jpg";

function Team(){
    return (
        <div className="team" style={{ background: `url(${bg_})`,padding:'35px 0px',boxShadow:'2px 2px 6px white'}}>
            <h1>Our Teams</h1>
            <div className="d-flex justify-content-evenly flex-wrap">
                <div className="new" style={{background:`url(${bg1})`}}>
                    <div className="team_inside">
                    <h2>Management and Technical Team</h2>
                    <p>
                        Add something...
                    </p>
                    <a href="/">Read more</a>
                    </div>
                </div>
                <div className="new" style={{background:`url(${bg2})`}}>
                    <div className="team_inside">
                    <h2>Frontend Team</h2>
                    <p>
                        Add something...
                    </p>
                    <a href="/">Read more</a>
                    </div>
                </div>
                <div className="new" style={{background:`url(${bg3})`}}>
                    <div className="team_inside">
                    <h2>Backend Team</h2>
                    <p>
                        Add something...
                    </p>
                    <a href="/">Read more</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Team;
import React from 'react';
import bg_ from "./assets/bgimg5.jpg";


const Statement = () => {
  return (
    <div className="d-flex flex-column align-items-center" style={{ background: `url(${bg_})` ,color:'white',padding:'25px 15px',paddingBottom:'70px',boxShadow:'2px 2px 6px white'}}>
        <h1 style={{ margin: '30px 0px'}}>Statement By Us</h1>
                    <div className='d-flex flex-wrap'>
                        <p className='statement1' style={{padding:'0px 35px'}}>
                        <h2 style={{textAlign:'center',marginBottom:'20px'}}>NOW</h2>
                            From 2023-2025, Our operational mission is just focusing on India with most different strategies. In Esports Culture Firstly, We Started in physical way contacting each and everyone upon different divisions. We will study & analyze on different aspects like most advanced promotion, marketing, Culture development & many more.

                        </p>
                        <p className='statement2' style={{padding:'0px 35px'}}>
                        <h2 style={{textAlign:'center',marginBottom:'20px'}}>After</h2>
                            By the year 2025, The while India knows about what is Esports company how it will work & also procedure how it is going to held by means youth will definitely add this like a daily route hobby in there day-to-day life.<br/>
                            <b>After that Our NXT Plan of action will start on all Across the world.</b>
                        </p>
                    </div>
            </div>
  )
}

export default Statement;

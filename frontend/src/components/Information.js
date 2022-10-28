import React from 'react';
import bg from './assets/rti_bg.jpg';
import img from './assets/img3.jpg';

const Information = () => {
    return (
        <div className="infoCss" style={{ background: `url(${bg})`,color:'white',padding:'25px',paddingBottom:'45px',boxShadow:'2px 2px 6px white'}}>
        <h1 style={{textAlign:'center',margin:'20px',marginBottom:'40px'}}>Right to Information</h1>
            <div className='d-flex flex-wrap flex-row justify-content-around'>
                <p style={{width:'40%',margin:'20px 10px'}}>
                <b>
                    End-to-End process of this is mainly focusing on the rule DIVIDE, RULE & CONQUER {'{DRC}'}. And Moreover we are here to focusing on Progress of the users.
                </b>
                </p>
                
            <img src={img} alt="about" />
            </div>
        </div>
    )
}

export default Information;

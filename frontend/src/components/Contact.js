import React from 'react';
import './css/style.css';

const Contact = () => {
    return (
        <form className='form' style={{ backgroundColor: 'black', color: 'white', padding: '30px',boxShadow:'2px 2px 6px white'}}>
            <h1 style={{textAlign:'center'}}>Contact Us</h1>
            <div className="mb-3">
                <label for="exampleInputName1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName1" placeholder='Your name here...' />
            </div>
            <div className="mb-3">
                <label for="exampleInputPhone1" className="form-label">Phone</label>
                <input type="text" className="form-control" id="exampleInputPhone1" placeholder='XXXXXXXXXX' />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='user@gmail.com' />
            </div>
            <div className="mb-3">
                <label for="floatingTextarea" className="form-label">Message</label>
                <textarea className="form-control" placeholder="Leave your message here..." id="floatingTextarea" style={{height:'100px'}}></textarea>
            </div>
            <div className="mb-3">
                <label for="exampleInput1" className="form-label">Gender</label>
                <div style={{marginLeft:'45px'}}>
                <input type="radio" name='gender' /><b style={{marginLeft:'5px',marginRight:'15px'}}>Male</b>
                <input type="radio" name='gender' /><b style={{marginLeft:'5px'}}>Female</b>
                </div>
            </div>
            <div className='mb-3'>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default Contact;

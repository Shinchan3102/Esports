import React from "react";
import "./css/adi.css";

function Footer(){
    return(
        <section className="footer" style={{backgroundColor:'black',color:'white',paddingTop:'25px',boxShadow:'2px 2px 6px white'}}>

    <div className="box-container">

        <div className="box">
            <h3>Esports</h3>
            <p>Address: Innovation Corridor, OUTR University, Ghatikia, Bhubaneswar, Odisha 751003</p>
            
        </div>

        <div className="box d-flex flex-column align-items-start justify-content-around">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/">Contact Us</a>
            <a href="/">About</a>
            <a href="/">Register</a>
        </div>

        <div className="box d-flex flex-column align-items-start justify-content-around">
            <h3>Contact Info</h3>
            <a href="/"><i class="fa fa-phone" aria-hidden="true" style={{marginRight:'5px'}}></i>+123-456-7890</a>
            <a href="/"><i class="fa fa-phone" aria-hidden="true" style={{marginRight:'5px'}}></i>+111-222-3333</a>
            <a href="/"><i class="fa fa-envelope" aria-hidden="true" style={{marginRight:'5px'}}></i>aditya0567@gmail.com</a>
            <a href="/"><i class="fa fa-map-marker" aria-hidden="true" style={{marginRight:'5px'}}></i>rourkela, india - 769015</a>
        </div>

        <div className="box d-flex flex-column align-items-start justify-content-around">
            <h3>Follow us</h3>
            <a href="/"><i class="fa-brands fa-facebook-square" style={{marginRight:'5px'}}></i>facebook</a>
            <a href="/"><i class="fa-brands fa-twitter" style={{marginRight:'5px'}}></i>twitter</a>
            <a href="/"><i class="fa-brands fa-instagram" style={{marginRight:'5px'}}></i>instagram</a>
            <a href="/"><i class="fa-brands fa-linkedin" style={{marginRight:'5px'}}></i>linkedin</a>
        </div>

    </div>

    <div className="credit w-100" style={{textAlign:'center'}}><b> copyright &#169; 2022 by <span>Esports</span></b> </div>

</section>
    )
}

export default Footer;
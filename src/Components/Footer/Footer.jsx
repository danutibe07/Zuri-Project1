import React from 'react'
import image4 from "../../images/footer1.svg"
import image5 from "../../images/footer2.svg"
import image6 from "../../images/footer3.svg"
const Footer = () => {
    return (
        <footer>
            <img src={image4} alt="image4" id="footer1"></img>
            <img src={image5} alt="image5" id="footer2"></img>
            <img src={image6} alt="image6" id="footer3"></img>
        </footer>
    )
}

export default Footer
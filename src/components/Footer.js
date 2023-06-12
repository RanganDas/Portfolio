import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon3.svg';
import navIcon3 from '../assets/img/giticon.png';

export const Footer = () => {
  return (
    
    <footer className="footer">

      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      
      <Container>
        <div className="myIcons">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/rangan-das-687575247/"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://www.instagram.com/rangan.dev/"><img src={navIcon2} alt="Icon" /></a>
            <a href="https://github.com/RanganDas"><img src={navIcon3} alt="Icon" /></a>
          </div>
        </div>
        <p>By Rangan Das</p>

      </Container>
    </footer >
  )
}
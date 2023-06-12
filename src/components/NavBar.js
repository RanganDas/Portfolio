import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon3.svg';
import navIcon3 from '../assets/img/giticon.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, seScrolled ] = useState(false)

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY>50)
            {
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)

    }, [])

    const onUpdateActiveLink = ((value)=>{
        setActiveLink(value);
    })

    return(
        <Navbar expand="lg" className={scrolled ? scrolled : ""}>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>   
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>  
            <Nav.Link href="#achievements" className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('achievements')}>Achievements</Nav.Link>       
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/rangan-das-687575247/"><img src={navIcon1} alt=""></img></a>
                <a href="https://www.instagram.com/rangan.dev/"><img src={navIcon2} alt=""></img></a>
                <a href="https://github.com/RanganDas"><img src={navIcon3} alt=""></img></a>
            </div>
            <button className="vvd" onClick={() =>window.open('https://drive.google.com/file/d/1CTiDKomq-U4-L2rCIpu8Qfg4npgEcIFe/view?usp=drive_link', '_blank') }><span>Download Resume</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}


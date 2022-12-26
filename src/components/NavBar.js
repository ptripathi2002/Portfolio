import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
// import logo from '../assets/img/logo.jpeg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/Github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



export const NavBar=() =>{
    const [activeLink , setActiveLink]= useState('Home');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    const [scrolled,setScrolled]= useState(false);

    useEffect(()=>{
        const onScroll=() =>{
            if(window.scrollY >50)
            {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);

    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        {/* <Navbar.Brand href="#Home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('Home')}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('Skills')}>Skills</Nav.Link>
            <Nav.Link href="#project"   className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('Projects')}>Projects</Nav.Link>

          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
            <a href='https://www.instagram.com/prashant._.tripathi02/'><img src={navIcon3} alt="Instagram" /></a>
            <a href='https://www.linkedin.com/in/pt2002/'><img src={navIcon1} alt="LinkedIn" /></a> 
            <a href='https://github.com/ptripathi2002'><img src={navIcon2} alt="Github" /></a> 
            </div>
            <Nav.Link href="#connect"   className={activeLink === "connect" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('Contact')}> <button className='vvd'><span>Let's Connect</span></button></Nav.Link>
           
           
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "../assets/header.css"


function Header() {
  return (
    <>
      <div className='container-md-fluid  main header position-relative '>
        <div className='main-nav position-fixed top-0 w-100 text-white bg-white'>
          {/* 
          <Navbar collapseOnSelect expand="lg" className="">
            <Container className='py-2'>
  
              <Navbar.Brand href="#home">
                <img src='icons/Logo.jpg' className='img-fluid rounded' alt='logo' style={{ maxWidth: "50px" }}></img>
  
  
              </Navbar.Brand>
  
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
  
                <Nav.Link href="#pricing">Home</Nav.Link>
                  <Nav.Link href="#pricing">About us</Nav.Link>
                 
                  <NavDropdown title="Services" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
  
                  <Nav.Link href="#pricing">Portfolio</Nav.Link>
                  <Nav.Link href="#pricing">Contact Us</Nav.Link>
  
                </Nav>
  
                <div className='btn-here'>
  
                  <a className=" contactbtn ">Call Us</a>
                </div>
                <Nav>
  
  
                </Nav>
              </Navbar.Collapse>
            </Container>
  
          </Navbar>*/}

          <header>
            <div className="container  py-4">
                <div className="header-wrap text-center">
                    <a href="#" className="site-logo">
                        <img src="./images/logo.png" className="img-fluid" alt="Expert Frontend developer India"/>
                    </a>

                  

                 
                </div>
            </div>
        </header>




        </div>


      </div>

      <div>
        {/* <Heroswiper /> */}


      </div>



    </>
  )
}

export default Header
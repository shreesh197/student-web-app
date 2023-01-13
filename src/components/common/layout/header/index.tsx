import { useRouter } from "next/router";
import { Navbar, Nav, Container } from "react-bootstrap";
// import kodlogo from "../../assets/logos/kodnest-logo.png";
import { DeviceContext } from "app-repo-common-pkg";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const AppHeader = (props: any) => {
  const router = useRouter();
  const { isMobile }: any = useContext(DeviceContext);
  const margin = !isMobile ? "" : "20px";
  return (
    <Navbar
      className="color-nav"
      variant="light"
      expand="lg"
      style={{
        boxShadow: "20px 15px 10px -17px #111",
        position: "fixed",
        width: "100%",
        zIndex: 1,
        background: "white",
      }}
    >
      <Container style={{}}>
        <Navbar.Brand>
          <div className="row">
            <div className="col-4 my-auto">
              <button
                className="transparent-button"
                onClick={() => props.setOpen(true)}
              >
                <GiHamburgerMenu fontSize={24} color={"grey"} />
              </button>
            </div>
            <div className="col-8 my-auto">
              <button
                className="transparent-button"
                onClick={() => router.push("/")}
              >
                <img
                  className="kodLogo"
                  src={"/logos/kodnest-logo.png"}
                  alt="appLogo"
                />
              </button>
            </div>
          </div>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-menu-links">
          <Nav
            variant="pills"
            defaultActiveKey="/"
            className="nav-links justify-content-end"
            style={{ width: "100%", marginTop: isMobile && "20px" }}
          >
            <Nav.Link className="navMenuLinks" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navMenuLinks" href="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link className="navMenuLinks" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="navMenuLinks" href="/contact-us">
              Contact Us
            </Nav.Link>
            {/* <NavDropdown title="Company" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1" href="/portfolio">
                  Portfolio
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2" href="/portfolio/skill-mine">
                  Skillmine
                </NavDropdown.Item>
              </NavDropdown> */}
            {/* <NavDropdown title="Services" id="nav-dropdown">
                <NavDropdown.Item
                  eventKey="4.1"
                  href="/services/web-design-and-development"
                >
                  Web Design & Development
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.2"
                  href="/services/custom-application-development"
                >
                  Custom Application Development
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.3"
                  href="/services/digital-marketing"
                >
                  Digital Marketing
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.4"
                  href="/services/search-engine-optimization"
                >
                  Search Engine Optimization
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item
                  eventKey="4.5"
                  href="/services/social-media-marketing"
                >
                  Social Media Marketing
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.6" href="/services/pay-per-click">
                  Pay-Per Click
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.7" href="/services/lead-generation">
                  Lead Generation Services
                </NavDropdown.Item>
              </NavDropdown>  */}
            {/* <NavDropdown title="Insights" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            {/* <Nav.Link className="navMenuLinks" href="/contact-us">
                Contact Us
              </Nav.Link> */}
            {/* <Nav.Link className="navMenuLinks" href="#other"> */}
            {/* <FaSearch /> */}
            {/* </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;

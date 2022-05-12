import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styles from './header.module.css';

const Header = ({ isLoggedIn, onLoginPress, navLinks }) => {
  return (
    <Navbar className={styles['header']}>
      <Container fluid className="ps-0 pe-0">
        <Navbar.Brand href="/">
          <img src="/logo-pg.svg" height="100%" />
        </Navbar.Brand>
        <Nav className="me-auto">
          {navLinks.map((link) => (
            <Nav.Link href={link.href}>{link.title}</Nav.Link>
          ))}
        </Nav>
        <Button variant="outline-secondary" onClick={onLoginPress}>
          Login
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MAIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";



export const NavBar = (props) => {
    const navigate = useNavigate();
    return (
        <Navbar bg="primary" variant="light">
            <Container>
                <NavLink style={{ color: 'white' }} to={MAIN_ROUTE}>Агрегатор отелей</NavLink>
                <Nav className="ms-auto">
                    <Button
                        onClick={() => navigate(REGISTRATION_ROUTE)}
                        variant={"outline-dark"}
                    >
                        Sign up
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    )
};
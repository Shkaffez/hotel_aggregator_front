import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from '../index';



export const NavBar = (props) => {
    const { user } = useContext(Context)
    const navigate = useNavigate();
    return (
        <Navbar bg="primary" variant="light">
            <Container>
                <NavLink style={{ color: 'white' }} to={MAIN_ROUTE}>Агрегатор отелей</NavLink>
                <Nav className="ms-auto">
                    {user.isAuth && user.user.role === 'admin' &&
                        <Button
                            onClick={() => navigate(ADMIN_ROUTE)}
                            variant={"outline-dark"}
                        >
                            Админ панель
                        </Button>
                    }
                    {user.isAuth &&
                        <Button
                            className="ms-3"
                            // дописать ф-ию для логаута
                            // onClick={() => navigate(REGISTRATION_ROUTE)}
                            variant={"outline-dark"}
                        >
                            Выйти
                        </Button>
                    }

                    {!user.isAuth &&
                        <>
                            <Button
                                onClick={() => navigate(REGISTRATION_ROUTE)}
                                variant={"outline-dark"}

                            >
                                Зарегестрироваться
                            </Button>
                            <Button
                                className="ms-3"
                                onClick={() => navigate(LOGIN_ROUTE)}
                                variant={"outline-dark"}
                            >
                                Войти
                            </Button>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
};
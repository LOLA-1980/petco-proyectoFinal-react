import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse d-flex justify-content-between align-items-center align-content-center" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-semibold" activeclassname="page" to={"/category/perro"}>Perro</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-semibold" activeclassname="page" to={"/category/gato"}>Gato</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-semibold" activeclassname="page" to={"/category/roedores"}>Roedores</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-semibold" activeclassname="page" to={"/category/reptiles"}>Reptiles</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-semibold" activeclassname="page" to={"/category/peces"}>Peces</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-semibold" activeclassname="page" to={"/category/aves"}>Aves</NavLink>
                                    </li>
                                </ul>
                                <div className="d-flex flex-row align-items-center align-content-center">
                                    <img src="images/camion-azul.png" className="m-2" alt="Camion" width="30" height="30" />
                                    <span>Envíos gratis superiores a $599</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default NavBar;
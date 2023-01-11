import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Header.css';

const Header = () => {
    return (
        <div className="container-fluid rectangleBlue header-fixed">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid d-flex justify-content-between">
                            <Link className="navbar-brand" to={"/"}><img src="images/Petco-brand-logo-prd.svg" alt="Petco" width="150" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                            <div>
                                <CartWidget />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;
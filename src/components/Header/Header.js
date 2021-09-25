import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
const Header = () => {

    return (

        <div className="container overflow-hidden">
            <div className="row gx-5">
                <div className="col">
                    <div className="p-3 bg-white"><img src={logo} alt="" /></div>
                </div>
                <div className="col">
                    <ul className="nav justify-content-end pt-2">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="\home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="\shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="\contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
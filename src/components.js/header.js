import React from "react";
import { useSelector } from "react-redux";


const Header = () => {
    const { categoryState } = useSelector(state => state)
    console.log(categoryState)
    return (
        <>

            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-6 hidden-xs">
                            <p className="top-text">Flexible Delivery, Fast Delivery.</p>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                            <ul>
                                <li>+90 553 679 89 52</li>
                                <li>mozdemir3545@gmail.com</li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="header-wrapper">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-8">
                            <div className="logo">
                                <a href="index.html"><img src="assets/images/logo.png" alt="" /> </a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="search-bg">
                                <input type="text" className="form-control" placeholder="Search Here" />
                                <button type="Submit"><i className="fa fa-search"></i></button>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="account-section">
                                <ul>
                                    <li><a href="#" className="title hidden-xs">My Account</a></li>
                                    <li className="hidden-xs">|</li>
                                    <li><a href="#" className="title hidden-xs">Register</a></li>
                                    <li><a href="#" className="title"><i className="fa fa-shopping-cart"></i>   <sup className="cart-quantity">1</sup></a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                <div id="navigation">
                                    <ul>
                                        <li className="active"><a href="index.html">Home</a></li>
                                        {categoryState.categories.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={"category/" + item.code}>
                                                        {item.name}
                                                    </a>
                                                </li>
                                            );

                                        }
                                        )}


                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
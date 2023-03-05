import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useApi from "../../../../hooks/useApi";
import { useEffect } from "react";


const ProductBox = (props) => {
    const [variant, setVariant] = useState({});
    const api = useApi();

    const variantCode = props.product.variants[0].split("/").reverse()[0];
    console.log("variantCode", variantCode);

    useEffect(() => {
        api.get("shop/product-variants/" + variantCode)
            .then((res) => {
                setVariant(res.data);
            });
    }, []);

    return (
        <>
            <div className="product-block">
                <div className="product-img">

                    <img
                        src={"http://ecommerce-api.udemig.dev/" + props.product.images[0].path} alt="" /></div>
                <div className="product-content">
                    <h5><Link to={`product/${props.product.code}`} className="product-title">
                        {props.name}<strong>
                            (64GB, Blue)
                        </strong></Link></h5>
                    <div className="product-meta">
                        <Link to={`product/${props.product.code}`} className="product-price">${variant.price ? variant.price : "Loading..."}</Link>

                        <Link to={`product/${props.product.code}`} className="discounted-price">${variant.originalPrice ? variant.originalPrice : "Loading..."}</Link>
                        <span className="offer-price">40%off</span>
                    </div>
                    <div className="shopping-btn">
                        <Link to={`product/${props.product.code}`} className="product-btn btn-like"><i className="fa fa-heart"></i></Link>
                        <Link to={`product/${props.product.code}`} className="product-btn btn-cart"><i className="fa fa-shopping-cart"></i></Link>
                    </div>
                </div>
            </div>

        </>
    )
}


export default ProductBox
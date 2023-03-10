import { useParams } from "react-router-dom"
import Breadcrump from "../../../components.js/breadcrump"
import useApi from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import ProductBox from "./components/product-box";

export default function CategoryDetails() {
    const params = useParams()
    const api = useApi();
    const [products, setproducts] = useState([]);


    function getProducts() {

        const config = {
            order: 'asc',
            'productTaxons.taxon.code': params.category_code,
        };

        api.get('shop/products', { params: config })
            .then((res) => {
                setproducts(res.data)

            });
    }
    useEffect(() => {
        getProducts();
    }, [params.category_code]);

    return (
        <>
            <Breadcrump />
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">

                            <div id="cssmenu">
                                <ul>
                                    <li className="has-sub"><a href="#">CATEGORY</a>
                                        <ul>
                                            <li className="even"><a href="#">Smart Phones</a></li>
                                            <li className="odd"><a href="#">Cell Phones</a></li>
                                            <li className="last even"><a href="#">Android Phones</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
                                    <form>
                                        <div className="select-option form-group">
                                            <select name="select" className="form-control">
                                                <option value="">Select</option>
                                                <option value="">Best Match</option>
                                                <option value="">Low Price</option>
                                                <option value="">High Price</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">


                                {products.map((item, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                                            <ProductBox product={item} />
                                        </div>
                                    )
                                })}




                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                                    <div className="product-block">
                                        <div className="product-img"><img src="images/product_img_2.png" alt="" /></div>
                                        <div className="product-content">
                                            <h5><a href="#" className="product-title">HTC U Ultra <strong>(64GB, Blue)</strong></a></h5>
                                            <div className="product-meta"><a href="#" className="product-price">$1200</a>
                                                <a href="#" className="discounted-price">$1700</a>
                                                <span className="offer-price">10%off</span>
                                            </div>
                                            <div className="shopping-btn">
                                                <a href="#" className="product-btn btn-like"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="product-btn btn-cart"><i className="fa fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="st-pagination">
                                        <ul className="pagination">
                                            <li><a href="#" aria-label="previous"><span aria-hidden="true">Previous</span></a> </li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li> <a href="#" aria-label="Next"><span aria-hidden="true">Next</span></a> </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
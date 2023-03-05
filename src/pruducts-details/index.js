import { useEffect } from "react";
import { useParams } from "react-router-dom"
import useApi from "../hooks/useApi";
import { useState } from "react";
import Breadcrump from "../components.js/breadcrump";

export default function ProductDetails() {

    const params = useParams();
    const [product, setProduct] = useState({});

    console.log(params);
    const api = useApi()

    useEffect(() => {
        api.get("shop/products/" + params.product_code)
            .then((res) => {
                setProduct(res.data);
            });
    }, []);

    if (!product.id) {
        return (
            <>
                <Breadcrump />
                <div className="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div class="showcase-block">
                                    <div class="display-logo ">
                                        <a href="#"> <img src="images/nexus.png" alt="" /></a>
                                    </div>
                                    <div class="showcase-img">
                                        <a href="#"> <img src="images/display_img_1.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="showcase-block active">
                                    <div class="display-logo alignleft">
                                        <a href="#">  <img src="images/iphone.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="showcase-img">
                                        <a href="#"> <img src="images/display_img_2.png" alt="" style="padding-left: 80px;" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div class="showcase-block ">
                                    <div class="display-logo ">
                                        <a href="#"> <img src="images/samsung.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="showcase-img">
                                        <a href="#"><img src="images/display_img_3.png" alt="" />                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="showcase-block">
                                    <div class="display-logo ">
                                        <a href="#"><img src="images/htc.png" alt="" /></a>
                                    </div>
                                    <div class="showcase-img">
                                        <a href="#"><img src="images/display_img_4.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="showcase-block">
                                    <div class="display-logo">
                                        <a href="#">  <img src="images/alcatel.png" alt="" /></a>
                                    </div>
                                    <div class="showcase-img">
                                        <a href="#"> <img src="images/display_img_5.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="showcase-block">
                                    <div class="display-logo ">
                                        <a href="#"><img src="images/pixel.png" alt="" /></a>
                                    </div>
                                    <div class="showcase-img">
                                        <a href="#">    <img src="images/display_img_6.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="showcase-block">
                                    <div class="display-logo ">
                                        <a href="#">  <img src="images/vivo.png" alt="" /></a>
                                    </div>
                                    <div class="showcase-img">
                                        <a href="#"><img src="images/display_img_7.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
    return <div>Product Details</div>;
}
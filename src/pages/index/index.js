import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import ProductsContainer from "../../components.js/product-container";

const Index=()=>{
    return(
        <>
        <Splide
        options={{
          perPage: 1,
          arrows: true,
          pagination: true,
          drag: 'free',
          gap: '5rem',
          type: 'loop',
          height: "500px"
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src="https://ecommerce-template.udemig.dev/images/slider_1.jpg" alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://ecommerce-template.udemig.dev/images/slider_2.jpg" alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://ecommerce-template.udemig.dev/images/slider_3.jpg" alt="Image 2"/>
        </SplideSlide>
      </Splide>
        <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">Merhaba</div>
          </div>
        </div>
      </div>
      <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><ProductsContainer/></div>
          
          </div>
        </div>
       </>

    )
}


export default Index;
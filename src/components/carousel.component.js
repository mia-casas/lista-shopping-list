import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function RecipeCarousel() {
    const [item1] = useState(`https://www.edamam.com/web-img/c6a/c6a28a8d158119017eb1ef62d6d80b7e.jpg`)
    const [item2] = useState(`https://www.edamam.com/web-img/a6d/a6d7389c3409a250f1702652f3158b7d.jpg`)
    const [item3] = useState(`https://www.edamam.com/web-img/7fb/7fb1d829df99fa6568a192af5872afd7.jpg`)


    return (

        <div className="carousel-wrapper">

            <Carousel>

                <div>

                    <img className="slides" alt="" src={item1}/>
                    <h4>Blueberry Salsa</h4>
                    <h4 id ="disappear">.</h4>
                </div>

                <div>
                    <img className="slides" alt="" src={item2}/>
                    <h4>Mango Lime Sorbet</h4>
                </div>

                <div>
                    <img className="slides" alt="" src={item3}/>
                    <h4>Cheese Strata</h4>
                </div>

            </Carousel>

        </div>

    );

}

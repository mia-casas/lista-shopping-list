import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function RecipeCarousel() {
    const [item1] = useState(`https://www.edamam.com/web-img/1a7/1a7e8a7208e149b15e3d1ee51d77e7aa.jpg`)
    const [item2] = useState(`https://www.edamam.com/web-img/1a7/1a7e8a7208e149b15e3d1ee51d77e7aa.jpg`)
    const [item3] = useState(`https://www.edamam.com/web-img/1a7/1a7e8a7208e149b15e3d1ee51d77e7aa.jpg`)


    return (

        <div className="carousel-wrapper">

            <Carousel>

                <div>

                    <img className="slides" alt="" src={item1}/>
                    <h4>Item 1</h4>
                    <h4 id ="disappear">.</h4>
                </div>

                <div>
                <img className="slides" alt="" src={item2}/>
                <h4>Item 2</h4>
                </div>

                <div>
                <img className="slides" alt="" src={item3}/>
                <h4>Item 3</h4>
                </div>

            </Carousel>

        </div>

    );

}

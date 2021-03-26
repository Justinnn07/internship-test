import React from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carousels = () => {
  return (
    <div className="carousel">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        className="carouselPlay"
      >
        <div>
          <img
            src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/BAnner-Ouwerkerk_1.jpg"
            alt=""
          />
          <p className="legend">Paul Ouwerkerk</p>
        </div>
        <div>
          <img
            src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Contemporary-Modern-Art-Dealers.jpg"
            alt=""
          />
          <p className="legend">Contemporary & Modern Art Dealers</p>
        </div>
        <div>
          <img
            src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/haraldboehmhomebanner_1_2.jpg"
            alt=""
          />
          <p className="legend">German Artist</p>
        </div>
        <div>
          <img
            src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/GOP–La-Ville-Container.jpg"
            alt=""
          />
          <p className="legend">GOP Photography</p>
        </div>
        <div>
          <img
            src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/ginnakakibannerhome.jpg"
            alt=""
          />
          <p className="legend">Couple in Red</p>
        </div>
        <div>
          <img
            src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Banner-william-betts-artfloor-1080x500_1.jpg"
            alt=""
          />
          <p className="legend">WILLIAM BETTS</p>
        </div>
        <div>
          <img
            src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Zofia-Lipecka-Peintures.jpg"
            alt=""
          />
          <p className="legend">Zofia Lipecka</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;

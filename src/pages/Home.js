import {Accessible} from './Accessible';
import {Accessible2} from './Accessible2';
import Home from './pages/home';

import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Home() {

  function slideLeft() {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div class="shipping-bar" >
      <p>Free shipping on all orders over $50. <a style="color: white;" href="https://www.aritzia.com/en/clothing">Shop Now</a></p>
      </div>

    <div class="logo-utility-bar">
      <div class="logo">
        <a href="home.html"><img class="logo-image" src="images/aritzia_logo.svg" /></a>
      </div>
      <div class="utility">
        <img style="width: 30px; height:auto;" src="images/search-icon.png" />
      </div>
      <div class="utility">
        <a href="my-closet.html"><img style="width: 24px; height:auto;" src="images/closet-icon.png" /></a>
      </div>
      <div class="utility">
        <img style="width: 30px; height:auto;" src="images/cart-icon.png" />
      </div>
      <div class="utility">
        <img style="width: 30px; height:auto;" src="images/bookmark-icon.png" />
      </div>
      <div class="utility">
        <p style="width: 30px; height:auto; font-size: 12px;">NAME</p>
      </div>
    </div>

    <div class="navigation-tabs">
      <div class="navigation-tab">
        <a class="navigation-link" href="https://www.aritzia.com/en/sale"><p>Sale</p></a>
      </div>
      <div class="navigation-tab">
        <a class="navigation-link" href="https://www.aritzia.com/en/new"><p>New</p></a>
      </div>
      <div class="navigation-tab">
        <a class="navigation-link" href="https://www.aritzia.com/en/clothing"><p>Clothing</p></a>
      </div>
      <div class="navigation-tab">
        <a class="navigation-link" href="https://www.aritzia.com/en/favourites-1"><p>Back In</p></a>
      </div>
      <div class="navigation-tab">
        <a class="navigation-link" href="https://www.aritzia.com/en/brands"><p>Brands</p></a>
      </div>
      <div class="navigation-tab">
        <a class="navigation-link" href="https://www.aritzia.com/en/stories"><p>Stories</p></a>
      </div>
      <div class="navigation-tab">
        <a class="navigation-link" href="https://www.aritzia.com/en/womens-workout-clothes-2"><p>Activewear</p></a>
      </div>
      <div class="navigation-tab">
        <a class="navigation-link" href="https://www.aritzia.com/en/the-super-puff-5"><p>The Super Puff&#8482;</p></a>
      </div>
    </div>

    <div class="deeper-markdowns-panel">
      <div class="deeper-markdowns-image-block">
        <a href="https://www.aritzia.com/en/sale"><img style="width: 350px;" src="images/home-deeper-markdowns-image.jpeg" /></a>
      </div>
      <div class="deeper-markdowns-text-block">
        <a class="deeper-markdowns-link" href="https://www.aritzia.com/en/sale">
          <p class="deeper-markdowns-text">Deeper Markdowns</p>
          <p class="deeper-markdowns-text">30-50% Off</p>
          <p class="winter-sale-text">Winter Sale</p>
        </a>
        <p class="select-styles-text">Select Styles.</p>
        <a><p class="shop-sale-text">Shop Sale</p></a>
      </div>
    </div> 
    </>
  ) 
}

export default Home;

import React from "react";

class Home extends React.Component{
    render(){
        return (
            <div>
              <div className="shipping-bar">
                <p>Free shipping on all orders over $50. <a style={{color: 'white'}} href="https://www.aritzia.com/en/clothing">Shop Now</a></p>
              </div>
              <div className="logo-utility-bar">
                <div className="logo">
                  <a href="home.html"><img className="logo-image" src="assets/images/aritzia_logo.svg" /></a>
                </div>
                <div className="utility">
                  <img style={{width: '30px', height: 'auto'}} src="assets/images/search-icon.png" />
                </div>
                <div className="utility">
                    {/* <link rel="script" href="src/App.js"><img style={{width: '24px', height: 'auto'}} src="assets/images/closet-icon.png" /> */}
                  <a href="/src/App.js"><img style={{width: '24px', height: 'auto'}} src="assets/images/closet-icon.png" /></a>
                </div>
                <div className="utility">
                  <img style={{width: '30px', height: 'auto'}} src="assets/images/cart-icon.png" />
                </div>
                <div className="utility">
                  <img style={{width: '30px', height: 'auto'}} src="assets/images/bookmark-icon.png" />
                </div>
                <div className="utility">
                  <p style={{width: '30px', height: 'auto', fontSize: '12px'}}>NAME</p>
                </div>
              </div>
              <div className="navigation-tabs">
                <div className="navigation-tab">
                  <a className="navigation-link" href="https://www.aritzia.com/en/sale"><p>Sale</p></a>
                </div>
                <div className="navigation-tab">
                  <a className="navigation-link" href="https://www.aritzia.com/en/new"><p>New</p></a>
                </div>
                <div className="navigation-tab">
                  <a className="navigation-link" href="https://www.aritzia.com/en/clothing"><p>Clothing</p></a>
                </div>
                <div className="navigation-tab">
                  <a className="navigation-link" href="https://www.aritzia.com/en/favourites-1"><p>Back In</p></a>
                </div>
                <div className="navigation-tab">
                  <a className="navigation-link" href="https://www.aritzia.com/en/brands"><p>Brands</p></a>
                </div>
                <div className="navigation-tab">
                  <a className="navigation-link" href="https://www.aritzia.com/en/stories"><p>Stories</p></a>
                </div>
                <div className="navigation-tab">
                  <a className="navigation-link" href="https://www.aritzia.com/en/womens-workout-clothes-2"><p>Activewear</p></a>
                </div>
                <div className="navigation-tab">
                  <a className="navigation-link" href="https://www.aritzia.com/en/the-super-puff-5"><p>The Super Puff™</p></a>
                </div>
              </div>
              <div className="deeper-markdowns-panel">
                <div className="deeper-markdowns-image-block">
                  <a href="https://www.aritzia.com/en/sale"><img style={{width: '500px',height: '550px'}} src="assets/images/home-deeper-markdowns-image.jpeg" /></a>
                </div>
                <div className="deeper-markdowns-text-block">
                  <a className="deeper-markdowns-link" href="https://www.aritzia.com/en/sale">
                    <p className="deeper-markdowns-text">Deeper Markdowns</p>
                    <p className="deeper-markdowns-text">30-50% Off</p>
                    <p className="winter-sale-text">Winter Sale</p>
                  </a>
                  <p className="select-styles-text">Select Styles.</p>
                  <a><p className="shop-sale-text">Shop Sale</p></a>
                </div>
              </div>
            </div>
          );
        }
      };

export default Home
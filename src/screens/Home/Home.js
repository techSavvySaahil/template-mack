import React from "react";
import "./assets/css/Home.scss";

import Logo from "./assets/images/logo.png";

import Description from "./assets/images/description.svg";
import BoxerBrief from "./assets/images/boxer-brief.svg";
import Trunk from "./assets/images/trunk.svg";
import Brief from "./assets/images/brief.svg";
import EightBoxerBrief from "./assets/images/eight-boxer-brief.svg";
import Breathable from "./assets/images/breathable.svg";
import ListStyle from "./assets/images/list-style.png";

import DescriptionSmall from "./assets/images/small-screen/description.svg";
import BoxerBriefSmall from "./assets/images/small-screen/boxer-brief.svg";
import TrunkSmall from "./assets/images/small-screen/trunk.svg";
import BriefSmall from "./assets/images/small-screen/brief.svg";
import EightBoxerBriefSmall from "./assets/images/small-screen/eight-boxer-brief.svg";
import BreathableSmall from "./assets/images/small-screen/breathable.svg";
import ProductRating from "./assets/images/small-screen/rating.png";

const GoogleRating = "https://cdn.shopify.com/s/files/1/0078/6825/2273/files/google-review.png?v=1591619027";

const LogoHalf = "https://cdn.shopify.com/s/files/1/0078/6825/2273/files/white-logo_40x.png?v=1591620001";

const Home = () => {
  return (
    <>
      <div className="banner">FREE SHIPPING ON ORDERS OVER $50 & LOYALTY PERKS</div>
      <header>
        <div className="large-header">
          <nav>
            <ul>
              <li>BESTSELLERS</li>
              <li>UNDERWEAR</li>
              <li>SOCKS</li>
              <li>TOPS</li>
              <li>BOTTOMS</li>
              <li>ACCESSORIES</li>
            </ul>
          </nav>
          <div className="img-wrapper">
            <img src={Logo} alt="Mack Weldon Logo" />
          </div>
          <div className="other-links">
            <div>
              <i className="fa fa-search" aria-hidden="true" />
              <span>Search</span>
            </div>
            <div>
              <i className="fa fa-user-o" aria-hidden="true" />
              <span>HEY, RILEY</span>
            </div>
            <div>
              <span>CART</span>
              <div className="cart-items-count">0</div>
            </div>
          </div>
        </div>
        <div className="small-header">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <p>MACK WELDON</p>
          <div>
            <i className="fa fa-search" aria-hidden="true" />
          </div>
          <div>
            <div className="cart-items-count">0</div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="desc-box">
          <h2>Why you need AIRKNITx breathable underwear</h2>
          <h5>Mack Weldon makes the internet's freshest underwear collection.</h5>
          <button>Try your first pair today.</button>
        </div>
        <div className="img-box">
        </div>
      </section>

      <section className="description">
        <div className="img-box">
          <picture>
            <source media="(min-width: 993px)" srcSet={Description} />
            <source media="(max-width: 992px)" srcSet={DescriptionSmall} />
            <img src={Description} alt="Description" />
          </picture>
        </div>
        <div className="desc-box">
          <h2>Designed with every detail in mind.</h2>
          <ul>
            <li><img src={ListStyle} alt="list style" /><span>Supportive flyless pouch</span></li>
            <li><img src={ListStyle} alt="list style" /><span>Moisture-wicking and odor-fighting</span></li>
            <li><img src={ListStyle} alt="list style" /><span>Targeting cool zones</span></li>
            <li><img src={ListStyle} alt="list style" /><span>No roll waistband</span></li>
            <li><img src={ListStyle} alt="list style" /><span>Stay-put legs</span></li>
          </ul>
        </div>
      </section>
      
      <section className="collection">
        <h2>Shop the AIRKNITx collection</h2>
        <div className="images-row">
          <div className="img-box">
            <picture>
              <source media="(min-width: 993px)" srcSet={BoxerBrief} />
              <source media="(max-width: 992px)" srcSet={BoxerBriefSmall} />
              <img src={BoxerBrief} alt="Boxer Brief" />
            </picture>
            <div>
              <div className="product-rating">
                <img src={ProductRating} alt="Product Rating" />
                <span>1139</span>
              </div>
              <h5>AIRKNITx Boxer Brief</h5>
              <p className="color-name">Redwood Heather</p>
              <p className="product-price">$32</p>
              <p>11 colors available</p>
            </div>
          </div>
          <div className="img-box">
            <picture>
              <source media="(min-width: 993px)" srcSet={Trunk} />
              <source media="(max-width: 992px)" srcSet={TrunkSmall} />
              <img src={Trunk} alt="Trunk" />
            </picture>
            <div>
              <div className="product-rating">
                <img src={ProductRating} alt="Product Rating" />
                <span>4545</span>
              </div>
              <h5>AIRKNITx Trunk</h5>
              <p className="color-name">Porto Heather</p>
              <p className="product-price">$32</p>
              <p>11 colors available</p>
            </div>
          </div>
          <div className="img-box">
            <picture>
              <source media="(min-width: 993px)" srcSet={Brief} />
              <source media="(max-width: 992px)" srcSet={BriefSmall} />
              <img src={Brief} alt="Brief" />
            </picture>
            <div>
              <div className="product-rating">
                <img src={ProductRating} alt="Product Rating" />
                <span>978</span>
              </div>
              <h5>AIRKNITx Brief</h5>
              <p className="color-name">Yew Heather</p>
              <p className="product-price">$32</p>
              <p>4 colors available</p>
            </div>
          </div>
          <div className="img-box">
            <picture>
              <source media="(min-width: 993px)" srcSet={EightBoxerBrief} />
              <source media="(max-width: 992px)" srcSet={EightBoxerBriefSmall} />
              <img src={EightBoxerBrief} alt="Eight Inch Boxer Brief" />
            </picture>
            <div>
              <div className="product-rating">
                <img src={ProductRating} alt="Product Rating" />
                <span>800</span>
              </div>
              <h5>AIRKNITx 8'' Boxer Brief</h5>
              <p className="color-name">Riptide Heather</p>
              <p className="product-price">$32</p>
              <p>4 colors available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="breathable">
        <div className="desc-box">
          <h2>Build to keep you dry, fresh, and comfortable, to the end of your workout or workday</h2>
          <p>Our soft, lightweight microfiber maximizes airflow and stretches in every direction. It's topped off with a
            moisture-wicking, odor-fighting finish to keep you dry and fresh to the end of the day.
          </p>
          <button>Shop Now</button>
        </div>
        <div className="img-box">
          <picture>
            <source media="(min-width: 993px)" srcSet={Breathable} />
            <source media="(max-width: 992px)" srcSet={BreathableSmall} />
            <img src={Breathable} alt="" />
          </picture>
        </div>
      </section>

      <footer>
        <div className="logo-wrap">
          <img src={LogoHalf} alt="mark weldon logo" />
        </div>
        <div className="main-details">
          <div className="signup">
            <p>Signup for exclusive offers, product news, and loyalty rewards</p>
            <div>
              <input placeholder="Your email address" />
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </div>
          </div>
          <nav>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>The Store</li>
              <li>Loyalty</li>
              <li>Corporate Gifting</li>
            </ul>
            <ul>
              <li>Help</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Size Guide</li>
              <li>Gift Card</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <div className="social">
            <ul>
              <li>
                <i className="fa fa-instagram" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-facebook" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-twitter" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-youtube-play" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-pinterest" aria-hidden="true" />
              </li>
            </ul>
            <div className="google-rating">
              <img src={GoogleRating} alt="google rating" />
            </div>
          </div>
        </div>
        <div className="policy-details">
          <div className="terms">
            <p>Terms</p>
            <p>Privacy Policy</p>
          </div>
          <div className="copyright">
            <i className="fa fa-copyright" aria-hidden="true"></i>
            <p>
              2020 Mack Weldon. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

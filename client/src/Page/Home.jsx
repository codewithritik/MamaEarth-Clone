import Header from "../Component/Header";
import Product from "../Component/Product"


import ".././css/slider.css"
import ".././css/home.css"
// import { Newbtn } from "../Component/Button";
import Carousel from "./courseol";
import { Footer } from "./Footer";
const data = [
  {
    url: "baby",
    text: "Best Sellers",
    para:"Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin, hair, and baby care journey."
  },
  {
    url: "face",
    text: "Mamaearth Lightning Sale",
    para:"Explore the goodness of nature from Mamaearth. Take a look at our lightning offers."
  },
  {
    url: "baby",
    text: "Onion Range",
    para:"Explore 100% toxin-free and safe Onion Range for Hair Fall, formulated with the goodness of natural ingredients and no harmful chemicals."
  },
  {
    url: "beauty",
    text: "Vitamin C Range",
    para:"Explore 100% toxin-free and safe Vitamin C Range for Glowing and Radiant Skin, formulated with the goodness of natural ingredients and no harmful chemicals."
  },
  {
    url: "colorcare",
    text: "New Launches",
    para:"Explore 100% toxin-free and safe Onion Range for Hair Fall, formulated with the goodness of natural ingredients and no harmful chemicals."
  },
  {
    url: "beauty",
    text: "Ubtan Range",
    para:"Explore the goodness of nature from Mamaearth. Take a look at our lightning offers."
  },
   {
    url: "face",
    text: "Summer Favorites",
    para:"Explore 100% toxin-free and safe Onion Range for Hair Fall, formulated with the goodness of natural ingredients and no harmful chemicals."
  },
   {
    url: "best_seller",
    text: "Colorcare",
    para:"Explore 100% toxin-free and safe Onion Range for Hair Fall, formulated with the goodness of natural ingredients and no harmful chemicals."
  },
  {
    url: "baby",
    text: "Skin Care",
    para:"Explore 100% toxin-free and safe Vitamin C Range for Glowing and Radiant Skin, formulated with the goodness of natural ingredients and no harmful chemicals."
  },
  {
    url: "hair",
    text: "Hair Care",
    para:"Explore 100% toxin-free and safe hair care products by Mamaearth. Whether it’s hair fall, dandruff, frizzy hair, or anything else – Mamaearth has a product for you. Get closer to the goodness of nature with our range of hair care products made with natural ingredients."
  },
  {
    url: "colorcare",
    text: "Baby Care",
    para:"Your little bundle of joy deserves nothing but the best. Explore MadeSafe Certified, natural, 100% toxin-free & gentle baby care products by Mamaearth. Give your little one the care they deserve!"
  },
]
const Home = () => {
    return (
      <div>
      
        <Carousel/>
        {data?.map((e) =>
        <Product prodata={e} />
        )}

        <div className="youtubecont">
          <div className="youtube">
            <iframe width="100%" height="315"
              src="https://www.youtube.com/embed/YROZybuYGUE"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>{" "}
          </div>
          <div className="youtubetext">
            <h2>Our Goodness Promise</h2>
            <p>At Mamaearth, we live to spread a little love and goodness every day. We believe that goodness isn’t a superpower, nor a special gift, it’s inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. For us goodness also means being good to the earth. Which is why we recycle more plastic than we use and we're PETA Certified - which means we never test on animals. This is our #GoodnessInside.</p>
            <div className="youtubbtn">
              <a href="/shop" className="shopbtn">SHOP NOW</a>
              <a class="readMoreBtn" href="/pledge">OUR PLEDGES</a>
            </div>
          </div>
        </div>
        <div className="treebanner"  >
          <img src="https://i.postimg.cc/CxN6hQ6k/Screenshot-199.png" alt="banner" className="treebannerf" />
          <img src="https://i.postimg.cc/RVwD8F7P/Screenshot-205-1.png" alt="safsf" className="treetab" />
 <img src="https://i.postimg.cc/bw8BjhLq/Screenshot-203.png"  alt="banner" className="treebannerf" />
          <img src="https://i.postimg.cc/pVwSq8Fh/Screenshot-204-1.png" alt="safsf" className="treetab" />
        </div>
       <Footer/>
      </div>
    );
}
 
export default Home;


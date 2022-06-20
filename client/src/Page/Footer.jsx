import { Newbtn } from "../Component/Button"
import ".././css/footer.css"
import {BsFillHeartFill} from "react-icons/bs"

export const Footer = () => {
    return < div >
         <div className="shippingcont">
          <div className="shipdiv">
            <div className="freeship">
              <img src="https://mamaearthp.imgix.net/wysiwyg/delivery2x.png?auto=format" alt="" srcset="" />
              <h3>Free Shipping</h3>
              <p>On Orders Above Rs. 399</p>
            </div>
           <div className="freeship">
              <img src="https://mamaearthp.imgix.net/wysiwyg/Group_81512x.png?auto=format" alt="" srcset="" />
              <h3>Free Shipping</h3>
              <p>On Orders Above Rs. 399</p>
            </div>
          </div>
          <div className="contactus">
            <div>

            Have Queries or Concerns?
            <br/>
            <Newbtn>Contact us</Newbtn>
            </div>
          </div>
        </div>
        <div  className="paymentfooter">
            <div>
                <h1>PAYMENT</h1>
                <div class="PaymentStrip"><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format" alt="" class="payment-card-img" /></div><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format" alt="" class="payment-card-img" /></div><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format" alt="" class="payment-card-img" /></div><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format" alt="" class="payment-card-img" /></div><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format" alt="" class="payment-card-img" /></div></div>
                  <p>100% Payment Protection, Easy Return Policy</p>
            </div>
            <div className="paymentimg">
                <div>
                    <img src="https://mamaearthp.imgix.net/wysiwyg/dermatology-tested-100x1002x.png?auto=format" alt="" />
                    <p>Dermatologically Tested</p>
                </div>
                <div>
                    <img src="https://mamaearthp.imgix.net/wysiwyg/fda-100x1002x.png?auto=format" alt="" />
                    <p>FDA Approved</p>
                </div>
                <div>
                    <img src="https://mamaearthp.imgix.net/wysiwyg/MadeSafeImages13Jan/madesafe13janlogo.png?auto=format" alt="" />
                    <p>Made Safe Certified</p>
                </div>
            </div>
        </div>
        <div className="footerdiv">
            <div className="fsubdiv">
                <h3>USEFUL LINKS</h3>
                <p>Privacy Policy</p>
                <p>returns</p>
                <p>terms & conditions</p>
                <p>terms & conditions-cashback</p>
                <p>FAQs</p>
                <p>We're safe</p>
                <p>track order</p>
                <p>contact us</p>
                <p>sitemap</p>
                <p>about us</p>
            </div>
            <div className="fsubdiv">
                <h3>CATEGORIES</h3>
                <p>baby</p>
                <p>beauty</p>
                <p>hair</p>
                <p>face</p>
                <p>body</p>
                <p>gift pack</p>
                
            </div>
            <div className="fsubdiv">
                <h3>MY ACCOUNT</h3>
                <p>account</p>
                <p>orders</p>
                <p>addresses</p>
            </div>
            <div className="fsubdiv">
                <img src="https://mamaearthp.imgix.net/wysiwyg/Best-Brand500x5002x.png?auto=format" alt="" />
            </div>
        </div>
        <div className="socialicon">
            <div style={{
                display: "flex",
                alignText: "center",
                margin: "auto",
                fontSize: "1.17em",
                    fontWeight:"600"
                
            }}>
            SHOW US SOME  <BsFillHeartFill style={{
                fontSize: "20px",
                    color: "red",
                margin:"0px 5px"
            }} /> ON SOCIAL MEDIA

            </div>
        </div>
        <div className="socialicon">
            <p>© 2022 Honasa Consumer Pvt. Ltd. All Rights Reserved
</p>
        </div>
    </ div>
}
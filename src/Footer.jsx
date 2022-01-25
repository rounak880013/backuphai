import image9 from './img/Template 2.png'
import image10 from './img/Vector.png'
import image11 from './img/Vector (1).png'
import image12 from './img/Vector (2).png'
import image13 from './img/facebook.png'
import image14 from './img/twitter.png'
import image15 from './img/linkedin1.png'
function Footer(){
    return(
        <footer>
      <div className='footerdistance'>
        <div className='logo'>
          <img src={image9} alt=""/>
        </div>
        <div className='footerdata'>
        <div className='footer1A'>
          <div className='footerinform'>
            Information
          </div>
          <div className='footername'>
            Main
          </div>
          <div className='footerspace'>
            About us
          </div>
          <div className='footerspace'>
            Our Causes
          </div>
          <div className='footerspace'>
            News & Features
          </div>
          <div className='footerspace'>
            Contact Us
          </div>
          <div className='footerspace'>
            Donate
          </div>
        </div>
        <div className='footer1B'>
          <div className='footerinform'>
            Contacts
          </div>
          <div className='cont_a'>
            <div>
              <img src={image10} alt=""/>
            </div>
            <div className='margincont'>
              RBW Silver Jubilee Hall.13th Cross, 4th Main,Malleshwaram, Bengaluru - 560 003.Premises of Composite Girls Govt PU College
            </div>
          </div>
          <div className='cont_b'>
            <div>
              <img src={image11} alt=""/>
            </div>
            <div className='margincont'>
              +91 93412 15692
            </div>
          </div>
          <div className='cont_c'>
            <div>
              <img src={image12} alt=""/>
            </div>
            <div className='margincont'>
              <div>sec.rotarybangalorewest</div><div>@gmail.com</div>
            </div>
          </div>
        </div>
        </div>
        <div className='social'>
          <div className='footerinform'>
            Social Media
          </div>
          <div>
            <img src={image13} alt=""/>
            <img src={image14} alt="" className='social_space'/>
            <img src={image15} alt="" className='social_space'/>
          </div>
        </div>
      </div>
      <div className='footerline'></div>
      <div className='copyright'>
        &copy; 2022 All Rights Reserved
      </div>
      </footer>
    )
}
export default Footer;
import image18 from "../assests/image.png"
import image19 from "../assests/image1.png"
import image20 from "../assests/image2.png"
import { FaArrowRight } from 'react-icons/fa';
function Aboutus(){
 return(
    <>
    <div className='banner_about'>
    <div className="about_us_g">About</div>
      <div className="about_us_a">
        <div className="about_us_d">
          <img  src={image18} alt="Avatar" class="image" class="imageg" />
          <img  src={image19} alt="Avatar" class="image" class="imagegg" />
        </div>
        <div className="about_us_c">
          <img  src={image20} alt="Avatar" class="image" class="imageg" />
        </div>
      </div>
      <div className="about_us_b">
      <div className="about_us_e">About</div>
      <div>Rotary is a global network of 1.2 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change - across the globe, in our communities, and in ourselves.Solving real problems takes real commitment and vision. For more than 110 years, Rotary's people of action have used their passion, energy, and intelligence to take action on sustainable projects. From literacy and peace to water and health, we are always working to better our world, and we stay committed to the end.</div>
      <div className='contact_us'>
      <button>Send Email<FaArrowRight/></button>
    </div>
      </div>
    </div>
    </>
 )
}
export default Aboutus;
import React from 'react';
import "./about.css";
// import "./navbar.css";
// import { BiDonateHeart } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import image from "../assests/image.png"
import image1 from "../assests/image1.png"
import image2 from "../assests/image2.png"

function About() {
  return <div>
<div className='main-about'>
{/* 1st part image */}
<div className='main-image'>
<img src={image}className='img1' ></img>
<img src={image1} className='img2' ></img>
</div>
<img src={image2} className='image2'></img>

{/* 2nd part about Heading */}
<div className='about1'>
<span className='main-heading'>
<h1>ABOUT</h1>
</span>

{/* 3r part of para */}
<div className='main-para1'>
<p>
Google team-based programming competition, Hash Code, allows you to share your skills and connect with other coders as you work together to solve a problem modeled off a real Google engineering challenge! In small teams of two to four, coders all over the world will tackle the first problem through Qualification Round. Though this round is hosted online, teams can come together virtually to compete side-by-side in locally coordinated Hash Code Hubs. The top teams from this round are invited to join us for the virtual World Finals.
</p>
</div>
{/* 4r part of para2 */}
<div className='main-para2'>
<p>
Google team-based programming competition, Hash Code, allows you to share your skills and connect with other coders as you work together to solve a problem modeled off a real Google engineering challenge! In small teams of two to four, coders all over the world will tackle the first problem through Qualification Round. Though this round is hosted online, teams can come together virtually to compete side-by-side in locally coordinated Hash Code Hubs. The top teams from this round are invited to join us for the virtual World Finals.
</p>
</div>

{/* 5th readmore */}
<div className='main-btn1'>
<button type="button" class="btn btn-primary social-media-desktop"><span style={{fontSize:"1.4rem",fontWeight:"570"}}>READ MORE <HiOutlineArrowNarrowRight/></span></button>
</div>
</div>











</div>



  </div>;
}

export default About;

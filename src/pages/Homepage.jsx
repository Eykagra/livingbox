import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../styles/homepage.css'
import pot from '../images/flower.png'
import stool from '../images/stool.png'
import sofa from '../images/sofa.png'
import logo from '../images/logo.png'
// import Review from './Review';
import { FaCcPaypal,FaCcVisa,FaAlipay,FaCcDiscover,FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaTiktok} from 'react-icons/fa';
import Feedback from './Feedback';
const Homepage = () => {useEffect(() => {

  const sr = ScrollReveal();

  sr.reveal('.shop-items', {
    duration: 400,
    origin: 'bottom',
    distance: '2rem',
    viewFactor: 0.7, 
    easing: 'ease-in',
    reset: true,
  });
  sr.reveal('.item-1', {
    duration: 1000,
    delay:400,
    origin: 'left',
    distance: '20px',
    viewFactor: 0.7, 
    reset: true,
  });
  // sr.reveal('.randomy', {
  //   duration: 1000,
  //   delay:400,
  //   origin: 'left',
  //   distance: '20px',
  //   viewFactor: 0.7, 
  //   reset: true,
  // });
  sr.reveal('.product-right', {
    duration: 1000,
    origin: 'left',
    distance: '20px',
    viewFactor: 0.3, 
    reset: true,
  });
  sr.reveal('.product-left', {
    duration: 1000,
    origin: 'left',
    distance: '20px',
    viewFactor: 0.3, 
    reset: true,
  });
  sr.reveal('.view-2', {
    duration: 1000,
    origin: 'bottom', 
    distance: '0', 
    opacity: 0,
    distance: '20px',
    viewFactor: 0.5, 
    reset: true,
  });
  sr.reveal('.view-1', {
    duration: 1000,
    origin: 'left', 
    distance: '0', 
    opacity: 0,
    distance: '20px',
    viewFactor: 0.5, 
    reset: true,
  });
  sr.reveal('.shop', {
    duration: 1000,
    origin: 'top', 
    distance: '0', 
    opacity: 0,
    viewFactor: 1, 
    reset: true,
  });
  sr.reveal('.livingbox', {
    duration: 1000,
    origin: 'top', 
    distance: '0', 
    opacity: 0,
    viewFactor: 1, 
    reset: true,
  });
  sr.reveal('.stepsimg', {
    duration: 500,
    origin: 'left', 
    distance: '20px', 
    viewFactor: 0.5, 
    easing: 'ease-in',
    reset: true,
  });
  sr.reveal('.textcontent', {
    duration: 800,
    delay:400,
    origin: 'left',
    distance: '20px',
    viewFactor: 0.5, 
    easing: 'ease-in',
    reset: true,
  });

}, []);

  return (
    <div className='homepage'>
      <div className="home">
        <ul>
            <li><button>Sign In</button></li>
            <li><button>Sign out</button></li>
            <li><button>Try for free</button></li>
        </ul>
      </div>
      <div className="shop-now">
        <div className="shop">
            <h1>Spice up your place even <br />simpler than you think</h1>
            <div >
            <button className='shop-button'>Shop Now</button>
            </div>
        </div>
        <div className='shop-items'>
          <div className="item-1">
            <p>Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry. <br />Lorem</p>
            <img src={pot} alt="" /></div>
          <div className="item-2">
            <div className="section1">
              <div className="sec-1">
                <p>Puntual Delivery <br />Time</p>
                <h1>2-3 Days</h1>
              </div>
               <div className="sec-2">
                <p>Competitive & Affordable prices starting from</p>
                <h1>$45.00</h1>
               </div>
            </div>
            <div className="section2">
              <div className="section2-1"><p>Hight Quaily Products</p>
              <h1>24K</h1>
              </div>
              <div className="section2-2"><p>Happy Clients and <br />keep growing</p>
              <h1>450+</h1>
              </div>
              <div className="section2-3"><p>Design Variations</p>
              <h1>50+</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="livingbox">
          <div>
            <h1>Why LIVINGBOX?</h1>
            <p>Perfection in every inch of our products</p>
            </div>
            <div >
            <button className='shop-button'>Discover Now</button>
            </div>
        </div>
        <div className="overview">
              <div className="above">
                <div className="view-1"><h3>At a glance</h3>
                <p>Lorem Ipsum is simply dummy text<br />of the printing and typesetting<br />industry.Lorem Ipsum is simply<br />dummy text of the printing</p>
                </div>
                <div className="view-2">
                  <div>
                  <h3>High quality furnishing</h3>
                  <p>Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry.Lorem Ipsum is <br />simply dummy text of the printing</p>
                  </div>
                  <img src={stool} alt=""/>
                </div>
              </div>
              <div className="below">
              <div className="view-1 dummy"><h3>Too many variations</h3>
                <p>Lorem Ipsum is simply dummy text<br />of the printing and typesetting<br />industry.Lorem Ipsum is simply<br />dummy text of the printing</p>
                </div>
                <div className="view-2 dummy2">
                  <div >
                  <h3>Compatible & Affordable</h3>
                  <p>Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry.Lorem Ipsum is <br />simply dummy text of the printing</p>
                  </div>
                  <img src={sofa} alt="" />
                </div>
              </div>
            </div>
           
      </div>
      <div className="steps">
              <img src={sofa} alt="" className='stepsimg' />
              <div className='textcontent'>
                <h2>Choose your <h2 className='text'>LIVING</h2>BOX<br />in 4 easy Steps</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit Minus, quisquam.</p>
              </div>
      </div>
      <div className="clients">
        <div className="clienttext">
        <h2>Over 1,000 design completed <br />for happy customers</h2>
        </div>
        <Feedback/>
      </div>
      <div className="products">
        <div className="product-items">
          <div className="product-left" style={{color:'white'}}>
          <div>
            <h1 style={{lineHeight:'4rem'}}>LIVINGBOX <br />Provides set of <br />Living Styles</h1>
            <button className='shop-button' style={{marginTop:'2rem'}}>Explore all</button>
            </div>
            <img src={pot} alt="#"/>
          </div>
          <div className="product-right" style={{color:'white'}}>
            <div className="randomy" style={{display:'flex'}}>
            <div>
            <h3 style={{marginBottom:'2rem'}}>Minimalist Style</h3>
            <p style={{paddingRight:'2.5rem',lineHeight:'2.6rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptas incidunt rerum doloribus temporibus. Optio, sapiente omnis. Recusandae, maiores facere.</p>
            </div>
            <img src={sofa} alt="" style={{width:'15rem',height:'15rem'}}/>
            </div>
            <div className="randomy" style={{display:'flex'}}>
            <div>
            <h3 style={{marginBottom:'2rem'}}>Morderner Style</h3>
            <p style={{paddingRight:'2.5rem',lineHeight:'2.6rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptas incidunt rerum doloribus temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, mollitia.</p>
            </div>
            <img src={sofa} alt="" style={{width:'15rem',height:'15rem'}}/>
            </div>
            <div className="randomy" style={{display:'flex',border:'none'}}>
            <div id='random'>
            <h3 style={{marginBottom:'2rem'}}>Industry Style</h3>
            <p style={{paddingRight:'2.5rem',lineHeight:'2.6rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptas incidunt rerum doloribus temporibus. Optio, sapiente omnis. Recusandae, maiores facere.</p>
            </div>
            <img src={sofa} alt="" style={{width:'15rem',height:'15rem'}}/>
            </div>
            <div>
             <h4 className='dummy'> and many more...</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
      <div className="sub-overlap">
      <div className="subscribe">
        <div className="follow">
          <h2>Follow us and get up to 70% discount</h2>
        </div>
        <div className="subinput" style={{display:'flex'}}>
          <input type="email" placeholder='Email address'/>
          <button className='shop-button'>Subscribe</button>
        </div>
      </div>
      </div>
        <div className="area area1">
          <img src={logo} alt="" />
          <div className="cont-1">
            <p style={{lineHeight:'3.2rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quisquam? Minus exercitationem saepe blanditiis est?</p>
          </div>
          <div className="bank">
          <FaCcPaypal size={50}  />
          <FaCcVisa size={50}/>
          <FaAlipay size={50}/>
          <FaCcDiscover size={50}/>
          </div>
        </div>
        <div className="area" style={{alignItems : "center"}}>
          <h2>Useful Links</h2>
          <h5>Privacy & Cookies</h5>
          <h5>Terms & Conditions of use</h5>
          <h5>Shipping & Return</h5>
          </div>
        <div className="area" ><h2>Follow us at</h2>
        <div className="social">
          <div className="circle"><FaFacebook size={50}/></div>
          <div className="circle"><FaInstagram size={50}/></div>
          <div className="circle"><FaTiktok size={50}/></div>
          <div className="circle"><FaTwitter size={50}/></div>
          <div className="circle"><FaYoutube size={50}/></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage

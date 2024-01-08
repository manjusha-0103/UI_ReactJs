import React, { Component } from 'react'
import './home.css'
import Vector from '../assets/logo/Vector.svg'
import { FaChevronDown } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import Mesh from '../assets/images/Mesh.svg'
import { FaArrowRight } from "react-icons/fa";
import Nuxt from '../assets/logo/nuxt.svg'
import Miro from '../assets/logo/miro.svg'
import LottieFiles from '../assets/logo/ltfiles.svg'
import Wise from '../assets/logo/wise.svg'
import Drillee from '../assets/logo/drille.svg'
import Kinsta from '../assets/logo/kinsta.svg'
import Angelist from '../assets/logo/angellist.svg'
import Behance from '../assets/logo/behance.svg'
import Key  from '../assets/logo/key.svg';
import Globe from '../assets/logo/globe.svg'
import Lock from '../assets/logo/lock.svg'
import Image1 from '../assets/images/Group 204.svg'
import Image2 from '../assets/images/Group 189.svg'
import Avtar from '../assets/images/Image.svg'
import Stars from '../assets/images/Frame 744.svg'
import Credit from '../assets/images/credit-card.svg'
import Earphones from '../assets/images/headphones.svg'
import Modeui from '../assets/images/modeui.svg'
import Github from '../assets/logo/gitHub.svg'
import Linkedin from '../assets/logo/linkedin.svg'
import Discord from '../assets/logo/discord.svg'

const Home = () => {
  return (
    <div className='main'>
        <div className='announcment-bar'>
            <div className='an-container'>
                <div className='an-content'>
                    <div className='badge'>
                        <p className='b-text'>Announcement</p>
                    </div>
                    <div className='Text'>
                        <p>We are happy to announce that we raise $2 Million in Seed Funding</p>
                    </div>
                </div>   
            </div>
        </div>
        <div className='navebar'>
            <div className='nav-container'>
                <div className='nav-row'>
                    <div className='nav-logo'>
                        <div className='l-img'>
                            <img src={Vector}/>
                        </div>

                    </div>
                    <div className='nav-menu'>
                        <div className='link1'>
                            <div className='l1-t'><p>Card access</p></div>

                            <div><FaChevronDown  className='down-ic'color='#363C46' /></div>
                            
                        </div>
                        <div className='link2'>
                            <p>Banking</p>
                        </div>
                        <div className='link2'>
                            <p>Processing</p>
                        </div>
                        <div className='link2'>
                           <p>About</p>
                        </div>
                        <div className='link2'>
                            <p>Carrier</p>
                        </div>
                        <div className='link2'>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className='nav-action'>
                        <div className='login-bt'> 
                            <button>
                                <div><p>Login</p></div>
                                <div><CiLogin className='login-ic'color="#5A6475"size={25}/></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='hero-section'>
           
            <div className='mesh'>
                <div className='hero'>
                    <div className='hero-content'>
                        <div className='row-con'>
                            <div className='h-main-content'>
                                <div className='con1'>
                                    <p className='sub-head'>Seamless experience</p>
                                    <div className='con1-s2'>
                                        <p className='h-title'>Unleashing the Next Generation of Card Solutions</p>
                                        <p className='ParaText'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                    </div>
                                    
                                </div>
                                <div className='con2'>
                                    <div className='action'>
                                        <button>
                                            <div className='action-text'>Unlock your Card</div>
                                            <div>
                                                <FaArrowRight color='white'/>
                                            </div>
                                        </button>
                                    </div>
                                    <p className='credit-p'>*No credit card required</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='logo-cloud'>
            <div className='lc-conatiner'>
                <div className='lc-row'>
                    <div className='lc-logo'>
                        <img src ={Nuxt}/>
                    </div>
                    <div className='lc-logo'>
                        <img src={Miro}/>
                    </div>
                    <div className='lc-logo'>
                        <img src ={LottieFiles}/>
                    </div>
                    <div className='lc-logo'>
                        <img src ={Wise}/>
                    </div>
                    <div className='lc-logo'>
                        <img src ={Drillee}/>
                    </div>
                    <div className='lc-logo'>
                        <img src = {Kinsta}/>
                    </div>
                    <div className='lc-logo'>
                        <img src = {Angelist}/>
                    </div>
                    <div className='lc-logo'>
                        <img src = {Behance}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='features'>
            <div className='f-conatainer'>
                <div className='f-row'>
                    <div className='f-subtitle'>
                        <div className='fs-containt'>
                            <div className='fs-main-con'>
                                <p className='fs-title'>Elevating Card Programs with Cutting-Edge Technology</p>
                                <p className='fs-title-sub'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='fsbt'> 
                                <div className='fs-b'>
                                    <button className='fs-button'>
                                        <div className='fs-bt-t'>Compare all Pro features</div>
                                        <div>
                                            <FaArrowRight className='fs-arrow'color='#582066'/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fs-column'>
                        <div className='fs-colimn1'>
                            <div className='fs-colimn1-con'>
                                <div className='bg-ic'>
                                    <img src ={Globe} alt ="globe"/>
                                </div>
                                <div className='fs-col-con'>
                                    <p className='fs-c-con-1'>Globally Accepted</p>
                                    <p className='fs-c-con-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                </div>
                            </div>
                        </div>
                        <div className='fs-column1'>
                            <div className='fs-colimn1-con'>
                                <div className='bg-ic'>
                                    <img src ={Key} alt ="key"/>
                                </div>
                                <div className='fs-col-con'>
                                    <p className='fs-c-con-1'>Biometric Integrated</p>
                                    <p className='fs-c-con-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                </div>
                            </div>
                        </div>
                        <div className='fs-column1'>
                            <div className='fs-colimn1-con'>
                                <div className='bg-ic'>
                                    <img src ={Lock} alt ="lock"/>
                                </div>
                                <div className='fs-col-con'>
                                    <p className='fs-c-con-1'>Fully Secured</p>
                                    <p className='fs-c-con-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='feature-one'>
            <div className='f-one-con'>
                <div className='f-one-row'>
                    <div className='f-one-subtitle'>
                        <div className='fost-content'>
                            <div className='fost-con-con'>
                                <p className='fost-con-subt1'>Elevating Card Programs with Cutting-Edge Technology</p>
                                <p className='fost-con-subt2'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='fsbt'> 
                                <div className='fs-b'>
                                    <button className='fs-button'>
                                        <div className='fs-bt-t'>Compare all Pro features</div>
                                        <div>
                                            <FaArrowRight className='fs-arrow'color='#582066'/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='f-one-column'>
                    <div className='f-one-image'>
                        <img src ={Image1} alt="img1" style={{alignSelf:"end"}}/>
                    </div>
                        
                    <div className='f-one-image'>
                        <img src ={Image2} alt="img2"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='component1'>
            <div className='compo-cont'>
                <div className='compo-cont-row'>
                    <div className='compo-cont-row-col'>
                        <div className='metric-box'>
                            <div className='metric-box-con'>
                                <p className='mb-con-title'>2 Million</p>
                                <div className='mb-con-con'>
                                    <p className='mb-cc-h'>Customers</p>
                                    <p className='mb-cc-ht'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                </div>
                            </div>
                        </div>
                        <div className='metric-box'>
                            <div className='metric-box-con'>
                                <p className='mb-con-title'>1K</p>
                                <div className='mb-con-con'>
                                    <p className='mb-cc-h'>Downloads</p>
                                    <p className='mb-cc-ht'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                </div>
                            </div>
                        </div>
                        <div className='metric-box'>
                            <div className='metric-box-con'>
                                <p className='mb-con-title'>$73 Million</p>
                                <div className='mb-con-con'>
                                    <p className='mb-cc-h'>Customers</p>
                                    <p className='mb-cc-ht'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                </div>
                            </div>
                        </div>
                        <div className='metric-box'>
                            <div className='metric-box-con'>
                                <p className='mb-con-title'>2.0</p>
                                <div className='mb-con-con'>
                                    <p className='mb-cc-h'>Latest Version</p>
                                    <p className='mb-cc-ht'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='testmonial'>
            <div className='test-content'>
                <div className='test-con-row'>
                    <div className='test-c-row-col'>
                        <div className='tcrc-cont'>
                            <div><img src ={Wise} alt = "wise"/></div>
                            <div style={{}}><p className='tcrc-con-p'>I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</p></div>
                        </div>
                        <div className='avatar'>
                            <div className='avtar-cont'>
                                <div className='avtar-img'>
                                    <img src = {Avtar} alt="avatr"/>
                                </div>
                            </div>
                            <div className='avtar-con'>
                                <p className='av-name'>Nick Babich</p>
                                <p className='av-desi'>Lead Designer</p>
                            </div>
                        </div>
                        <div className='ratings'>
                            <img src = {Stars} alt= "stars"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='call-to-action'>
            <div className='action-cont'>
                <div className='ac-cont-row'>
                    <div className='ac-cont-subt'>
                        <p>Unlock Limitless Possibilities with Our New Card Solutions</p>
                    </div>

                    <div className='st-action'>
                        <div className='st-act-bt1'>
                            <button className='st-bt1-base'>
                                <p className='st-bt1-t'>Unlock your card</p>
                                
                                <img className="credit"src={Credit} alt="credit"/>
                               
                            </button>
                        </div>
                        <div className='st-act-bt2'>
                            <button className='st-bt2-base' style={{backgroundColor:"#EEEFEF"}}>
                                <p className='st-bt2-t'>Customer support</p>
                                
                                <img className="credit"src={Earphones} alt="credit"/>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <div className='foot-cont'> 
                <div className='foot-cont-row'>
                    <div className='cont1'>
                        <div className='cont1-1'>
                            <div className='c11-cont'>
                                <div className='c11-cont-con'>
                                    <div className='c11-modeui'>
                                        <img src={Modeui} alt="modeui"/>
                                    </div>
                                    <p>Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices</p>
                                </div>
                                <div className='dash'></div>
                            </div>
                        </div>
                        <div className='cont1-2'>
                            <div className='cont1-2-con'>
                                <div className='ct12-con1'>
                                    <p className='ct12-con1-title'>Company</p>
                                    <div className='ct12-con1-con'>
                                        <div className='comp1'>
                                            <p>About us</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Pricing</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Contact us</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Features</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ct12-con1'>
                                    <p className='ct12-con1-title'>Product</p>
                                    <div className='ct12-con1-con'>
                                        <div className='comp1'>
                                            <p>Figma design system</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Ios kit</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Android kit</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Wireframe</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ct12-con1'>
                                    <p className='ct12-con1-title'>Resources</p>
                                    <div className='ct12-con1-con'>
                                        <div className='comp1'>
                                            <p>Templates</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Landing pages</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Documentation</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Comp library</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ct12-con1'>
                                    <p className='ct12-con1-title'>Legal</p>
                                    <div className='ct12-con1-con'>
                                        <div className='comp1'>
                                            <p>Privacy policy</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Terms & Conditions</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Disclaimer</p>
                                        </div>
                                        <div className='comp1'>
                                            <p>Affiliate programme</p>
                                        </div>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                    <div className='cont2'>
                        <div className = "cont2-1">
                            <div className='con-social'>
                                <div> <img src ={Github}/></div>
                                <div><img src ={Linkedin}/></div>
                                <div><img src ={Discord}/></div>
                            </div>
                        </div>
                        <p>© 2023 Mode UI  Inc. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home

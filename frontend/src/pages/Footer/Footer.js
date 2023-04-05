import React from 'react'
import {FiFacebook, AiOutlineHeart, AiOutlineInstagram, IoLogoYoutube} from 'react-icons/all';
import { Input,Stack } from '@chakra-ui/react'
import './footercss.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Our Menu</h1>
                    <ul>
                        <li><Link to = '/shop/?cg=Women'>Pizza</Link></li>
                        <li><Link to = '/shop/?cg=Men'>Burger</Link></li>
                        <li><Link to = '/shop/?cg=Shoes'>Coffee</Link></li>
                        <li><Link to = '/shop/?cg=Watches'>Meal</Link></li>
                    </ul>
                </div>

                <div className="fooHelp">
                    <h1>Help</h1>
                    <ul>
                        <li>Tracke Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Get in touch</h1>
                    <p> <span id='hoursOpen'> Hours Open </span> <br />
                            9:00 am to 2:00  pm <br />
                            5:00 pm to 12:00 am 
                        </p>
                    <ul>       
                      
                       
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">  
                            <AiOutlineInstagram size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25"/>
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
                    
                    {/* <h1>Newsletter</h1>
                    <ul>
                        <li>
                            <Stack spacing={3}>
                            <Input variant="flushed" placeholder="email@example.com" size="10" width="200px"/>
                            </Stack>
                        </li>
                        <li>
                            <button className="footerBtn">Subscribe</button>
                        </li>
                    </ul> */}
                </div>

                <div className="creditsIcons">
                    {/* <ul>
                        <li><img src="https://i.imgur.com/AHCoUZO.png" className="img1"/></li>
                        <li><img src="https://i.imgur.com/JZRipBg.png" className="img2" /></li>
                        <li><img src="https://i.imgur.com/l8OAGyo.png" className="img3" /></li>
                        <li><img src="https://i.imgur.com/IDHC2iv.png" className="img4" /></li>
                    </ul> */}
                    
                </div>
                
                <div className="paragraphFooter"><p>Copyright ©2023 All rights reserved | This website is made with ♡ by 3 ideos.</p>
                {/* <Link to = '' >Abdessamad bourhjoul</Link>
                <Link to = ''  >Soufian zaam</Link>
                <Link to = ''  >Souhail ouabou</Link> */}
                </div>



            </footer>

        </div>
    )
}

export default Footer;

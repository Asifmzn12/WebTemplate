import React from 'react'
import { BiLogoInstagramAlt, BiLogoFacebookSquare, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../assets/footer.css"
import { Icons } from '../Icons/IconsData';


function Footer() {
    const data = [BiLogoInstagramAlt, BiLogoFacebookSquare, BiLogoLinkedinSquare, FaSquareXTwitter]

    return (
        <div className='footerbg'>

            <div className='container py-lg-5 py-2 '>
                <div className='row justify-content-between align-items-center gy-3'>
                    <div className='col-md-4 '>
                        <div className='firstcol d-flex flex-column gap-2'>
                            <img src='icons/Logo.jpg' loading='lazy' className='img-fluid rounded' alt='logo' style={{ maxWidth: "50px" }}></img>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, similique. Dolore, cupiditate! Mollitia, fuga sed.</p>
                            <p>Follow us</p>
                            <div className='icons'>

                                {data.map((Here, i) => (
                                    <Here loading="lazy" id={`box-${i}`} key={i} size={25} style={{ marginRight: "10px" }} />
                                ))}
                            </div>
                        </div>

                    </div>

                    {Icons.FooterNav.map((data, i) =>
                        <div className='col-md-2 col-5 ' key={i}>
                            <div className='firstcol  '>
                                <h5>{data.title}</h5>
                                <ul className=' list-unstyled footernav'>
                                    {Icons.Footermenu.map((data, i) => <li><a>{data.title}</a></li>)}

                                </ul> </div>
                        </div>
                    )}




                </div>
            </div >

            <div className='copywrite text-center bg-footergray py-3'>
                <h4>© 2024 All rights reserved ! Made  by Asif Ali</h4>

            </div>
        </div>
    )
}

export default Footer

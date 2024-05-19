/* eslint-disable react/no-unescaped-entities */

import Marquee from "react-fast-marquee";
// import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import "../assets/Content.css"
import "../assets/card.css"
import { Icons } from "../Icons/IconsData"
import MySwiper from "./Heroswiper";
import "../assets/hero-section.css"


function Webtheme() {



    return (
        <>
            <section className="hero-section site-hero ">
                <div className="container py-lg-5 pt-4 ">
                    <div className="row justify-content-center align-items-center  py-4 gy-3">

                        <div className="col-md-6">
                            <div className="content">
                                <p className="header-small-title">Modern, Minimal, Magnetic</p>
                                <h1>Leading-Edge Frontend Development Services for Forward-Thinking Businesses</h1>
                                <a href="#" className="site-btn-outline ">Work With Me</a>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <MySwiper />
                        </div>
                    </div>
                </div>

                <div className="scrolling-text-wrap">
                    <div className="stripe">
                        <div className="cntr">
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Uiux design service" />
                                <h3>Branding</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="frontend development services" />
                                <h3>Web Design</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Web designer India" />
                                <h3>Social Media Marketing</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Expert Web designer" />
                                <h3>Branding</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Frontend services" />
                                <h3>Web Design</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Top rated frontend developer" />
                                <h3>Social Media Marketing</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Frontend and Web Design Services" />
                                <h3>Branding</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Expert web designer India" />
                                <h3>Web Design</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Best Frontend Developer" />
                                <h3>Social Media Marketing</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Best Frontend Developer India" />
                                <h3>Branding</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Best Web Designer" />
                                <h3>Web Design</h3>
                            </div>
                            <div className="scrolling-text-bex">
                                <img src="https://www.createdbymunish.com/images/text-divider-shap.svg" alt="Best Web Designer India" />
                                <h3>Social Media Marketing</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="about-section">

                <div className="container py-4">
                    <div className="row justify-content-center  align-items-center gy-3 ">
                        <div className="col-md-6">
                            <div className="about-content d-flex flex-column gap-lg-4 gap-2 ">
                                <p className="site-subtitle-text">Hello there!</p>

                                <h2 className="site-section-title">I'm Asif Ali, a multifaceted creative director and brand stylist with expertise in UI/UX design, Frontend development</h2>

                                <p className="body-text">Welcome to the intersection of creativity, technology, and business growth. I'm your guide to transcending the ordinary in UI/UX Design, Frontend Development, and WordPress solutions. With over a decade of hands-on experience, I offer bespoke digital craftsmanship tailored to visionaries seeking unparalleled excellence.</p>

                                <p className="body-text">As a freelancer, I'm committed to offering personalized services that meet the unique needs of each client. Whether you're looking to revamp your website, enhance your user experience, or develop a custom WordPress site, my goal is to help you achieve your digital objectives with bespoke solutions that reflect the latest in web design and development trends. By choosing to work with me, you're not just getting a service provider; you're gaining a partner dedicated to elevating your brand to new heights in the digital landscape.</p>

                                <p className="body-text">I support businesses in establishing a powerful online presence that speaks to their identity and values, driving engagement and fostering growth.</p>
                            </div>

                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className="about-right-image justify-content-end align-items-end">
                                <img src="https://www.createdbymunish.com/images/freelancer-frontend-developer.jpg" alt="Ex" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-secondary site-section">
                <div className="container py-lg-5 py-4">
                    <div className="row justify-content-between justify-content-lg-start justify-content-xl-center  gy-2 mb-3">
                        <div className="d-flex flex-column gap-2 justify-content-md-center justify-content-start align-items-md-center mb-3">
                            <p className="site-subtitle-text">What i do</p>
                            <h2 className="site-section-title">Innovative Design &amp; Development Services</h2>
                        </div>
                        {Icons.ServicesIcons.map((Data) => (
                            <div key={Data.id} className="col-md-6 col-lg-4 col-xl-3 py-2 ">
                                <Card className="servicesCard shadow py-2">
                                    <Card.Body className="d-flex flex-column gap-2">
                                        <div className={`${Data.background} cardimg`}>
                                            <Data.icons fontSize={"56px"} loading="lazy" />
                                        </div>
                                        <Card.Text className="site-subtitle-text fw-medium">{Data.title}</Card.Text>
                                        <Card.Text>
                                            Whether you are looking for a romantic tour, Tuscany is the
                                            perfect destination for a true Italian experience.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <section className="technolgoies">
                <div className="container py-lg-5 py-4">

                    <div className="row  justify-content-center gy-2 mb-3">
                        <div className="d-flex flex-column gap-2 justify-content-center align-items-md-center mb-3">
                            <p className="site-subtitle-text">Technologies We Used</p>
                            <h2 className="site-section-title">We will keep updated you with latest trands of tech markets</h2>
                        </div>

                        <Marquee className="my-2">
                            {Icons.frontend.map((data) => (
                                <div className="img-box my-3 p-3 rounded" key={data.id}>
                                    <img loading="lazy"
                                        src={data.icon}
                                        className="img-fluid rounded-circle"
                                        alt={`Frontend icon ${data.id}`}
                                    />
                                </div>
                            ))}
                        </Marquee>

                        <Marquee className="my-3" direction="right">
                            {Icons.backend.map((data) => (
                                <div className="img-box my-3 p-3 rounded" key={data.id}>
                                    <img loading="lazy"
                                        src={data.icon}
                                        className="img-fluid"
                                        alt={`Backend icon ${data.id}`}
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
            <section className="our-portfolio">
                <div className="container py-lg-5 py-2 ">
                    <div className="row  align-items-center mb-3 gy-2">
                        <div className="d-flex flex-column gap-2 justify-content-center align-items-md-center ">
                            <p className="site-subtitle-text">Our Portfolio</p>
                            <h2 className="site-section-title">Works that we done previously</h2>
                        </div>
                    </div>



                    <div className="row py-3 align-items-center py-2 gy-3 position-relative">
                        {Icons.PortfolioImage.map((data) => (
                            <div
                                className="col-sm-6 col-md-4 col-lg-3 position-relative hover"
                                key={data.id}
                            >
                                <div className={data.class} >
                                    <div className="text d-flex flex-column justify-content-center align-items-center gap-2 ">
                                        <h4 className="fw-bold text-center">{data.title}</h4>
                                        <p className="title text-white">
                                            Here is filled with diverse cultures & cities
                                        </p>
                                        <button className="site-btn-outline">Explore</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>


            <div className="after-project-section">
                <div className="container">
                    <div className="why-choose-box row">
                        <div className="col">
                            <h2 className="site-section-title">I've dedicated myself to elevating brands into legends.</h2>

                            <p className="body-text">From startups to stalwarts, I've partnered with an array of clients, helping them stand out, rebrand, and conquer their markets.</p>

                            <p className="body-text">My mission? To turn your vision into reality, ensuring your brand not only speaks but resonates.</p>
                        </div>

                        <div className="col">

                            <p className="body-text mt-0"><strong>For Agencies &amp; Freelancers:</strong> Overwhelmed with projects? I'm your go-to guy to lighten the load without compromising on creativity or quality. For my fellow freelancers, especially backend wizards needing a frontend ally, I'm here to bridge that gap.</p>

                            <p className="body-text"><strong>Let's Scale New Heights:</strong> Whether you're looking to revamp your brand, launch an innovative website, or dominate social media, you're in the right place. Let's collaborate to craft experiences that don't just attract but captivate and convert.</p>
                        </div>

                    </div>
                </div>
            </div>


            <section className="why-you-here">

                <div className="container py-md-5 py-4 ">

                    <h2 className="site-section-title">Let's talk about why you're really here.</h2>

                    <p className="body-text">Through my proven process, I have designed minimal, intentional brands for wellness entrepreneurs that maximize their digital presence and book more clients who crave the transformational services they offer.</p>

                    <p className="body-text"><strong>Believe me when I say, we can make this vision a reality for you, too. </strong></p>

                    <p className="body-text">Even if you are one of the true experts in your industry (and I do believe you are), you are hiding your light under a barrel without branding that reflects your passion, value, and credentials. </p>

                    <p className="body-text">Our strategic branding will reveal your undeniable shine, letting you pause your lead-chasing routine and unleash the confidence to share your business internationally.</p>

                    <p className="body-text">Do you want to attract ideal clients effortlessly?</p>

                    <a href="" className="site-btn-outline">Work With Me</a>
                </div>

            </section>





            {/* 


  <section className="partner-section">
      <div className="container py-lg-5 py-2">
          <div className="row justify-content-center align-items-center">
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center mb-3">
                  <p className="site-subtitle-text">Our Partner </p>
                  <h4 className="site-section-title">
                      Trust me got  over the years </h4>
              </div>
  
  
              {Icons.Partners.map((data) => (
                  <div className="partner my-3 p-3 col-md-2 col-6" key={data.id}>
                      <img loading="lazy"
                          src={data.img}
                          className="img-fluid partner-img"
                          alt={`Backend icon ${data.id}`}
                      />
                  </div>
              ))}
  
  
          </div>
      </div>
  
  </section>
*/}



            <section className="love-notes">
                <div className="container">
                    <p className="love-note-title-top text-start mb-5">LOVE NOTES FROM CLIENTS</p>

                    <div className="row justify-content-center align-items-start gy-3">
                        <div className="col-md-4  ">
                            <div className="love-notes-box ">
                                <p className="body-text">"Everyone is getting on Upwork and saying they are Webdesigners but they are just beginners. <strong>Asif Ali</strong>, on the other hand, is very talented, smart and knows what he is talking about. A+ Developer. Strongly recommended."</p>

                                <h3 className="site-card-title">Rushit Hila</h3>
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <div className="love-notes-box ">
                                <p className="body-text">"<strong>Asif Ali</strong> is a very hard working professional, you will be happy with the results."</p>

                                <h3 className="site-card-title">Samual</h3>
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <div className="love-notes-box">
                                <p className="body-text">"Not only <strong>Asif Ali</strong> a creative UX designer, he is also highly cooperative and adheres to deadlines. He had me hooked from the minute I laid eyes on his portfolio!"</p>

                                <h3 className="site-card-title">Andrian Dsouza</h3>
                            </div>
                        </div>
                    </div>

                    <p className="love-note-title-bottom text-end my-3">LOVE NOTES FROM CLIENTS</p>
                </div>
            </section>


            <div className="why-you-here nxt-steps">
                <div className="container py-lg-5 py-4">
                    <h2 className="site-section-title">Ready to Take The Next Step?</h2>

                    <div className="row justify-content-center align-items-start gy-3" >
                        <div className="col-md-4">
                            <h2>01</h2>
                            <p className="body-text">Click the button below to fill the form about your business, project goals, timeline, etc.</p>
                        </div>

                        <div className="col-md-4">
                            <h2>02</h2>
                            <p className="body-text">Then we'll schedule a quick zoom call to discuss your project further, and potentially send a project proposal.</p>
                        </div>

                        <div className="col-md-4">
                            <h2>03</h2>
                            <p className="body-text">Once you book, I'll start building your elevated brand, website, packaging, &amp; anything else you need!</p>
                        </div>
                    </div>

                    <a href="#" className="site-btn-outline mt-md-5 mt-5">Work With Me</a>
                </div>
            </div>


            <div className='copywrite text-center  py-4'>
            <h4 className="m-0">© 2023 All rights reserved ! Made  by Asif Ali</h4>

        </div>

  {/* 


  <section className="contactdetails ">
      <div className="contactus container  py-lg-5 py-2 ">
          <div className="row justify-content-center align-items-center gy-2 mb-3">
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center mb-3">
                  <p className="site-subtitle-text">Get in touch</p>
                  <h2 className="site-section-title">Select how you would like to contact us</h2>
              </div>
  
              {Icons.Contact.map((data) =>
                  <div className="col-md-4 col-lg-2 col-6" key={data.id} >
                      <div className="contactbox text-center d-flex flex-column gap-2 justify-content-center align-items-center shadow py-3 ">
                          <img loading="lazy" src={data.img} className="img-fluid contactimg"></img>
                          <p className="fw-bold">{data.title}</p>
                      </div>
  
                  </div>
  
              )}
  
          </div>
  
  
  
      </div>
  
  </section>

*/}



            {/* 
              <div className="Accodianbox bg-gray bg-grey ">
                  <div className="container py-lg-5 py-2">
                      <div className="row justify-content-between">
                          <div className="col-md-4">
                              <h2>Top FAQs</h2>
                              <p className="my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque est animi vero, amet eum similique expedita at impedit cupiditate? Quisquam!</p>
  
                          </div>
                          <div className="col-md-7">
                              <Accordion defaultActiveKey="0" >
                                  {Icons.Contact.map((data, i) =>
                                      <Accordion.Item eventKey={i} className="my-2" key={i}>
                                          <Accordion.Header>Accordion Item {data.id}</Accordion.Header>
                                          <Accordion.Body>
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                              culpa qui officia deserunt mollit anim id est laborum.
                                          </Accordion.Body>
                                      </Accordion.Item>
  
                                  )}
  
  
                              </Accordion>
  
                          </div>
  
  
                      </div>
  
                  </div>
              </div>
            
            */}




        </>
    );
}

export default Webtheme;

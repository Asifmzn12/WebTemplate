import React from 'react';
import Typed from 'typed.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import "../assets/Content.css";
import "../assets/card.css";

function Content() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <>

      <div className='container-fluid g-0 position-relative'>
        <div className='container py-5'>
          <section className='hero-section'>
            <div className='row'>
              <div className='row'>
                <div className="col-md-6">
                  <div className='typed-text'>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className='home-image'>
                    <img src='../images/heroimage.jpg' className='img-fluid'>No images</img>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className='row align-items-center py-5'>
            <div className='col-md-6'>
              <div className='d-flex flex-column gap-3'>
                <span>Dream Vacation Destination</span>
                <h2>Plan the Trip of a Lifetime with Ease</h2>
                <p>Whether you're looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, a travel agency can provide you with a custom-tailored itinerary that exceeds your expectations.</p>
                <button className='btn btn-primary '>More Info</button>
              </div>
            </div>
          </div>

          <div className='row py-3 justify-content-center align-items-center gy-3 '>
            <div className='col-md-4'>
              <div className=' svg-box d-flex flex-column rounded position-relative py-3 box-1'>
                <img src='https://travel.nicdark.com/city-tour/wp-content/uploads/sites/3/2023/04/icon-001.gif' className='img-fluid '></img>
                <h5 className='fw-bold'>City Walk Tour</h5>
              </div>
            </div>
            <div className='col-md-4'>
              <div className=' svg-box d-flex flex-column rounded position-relative py-3 box-2'>
                <img src='https://travel.nicdark.com/city-tour/wp-content/uploads/sites/3/2023/04/icon-002.gif' className='img-fluid '></img>
                <h5 className='fw-bold'>City Walk Tour</h5>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='svg-box d-flex flex-column rounded position-relative py-3 box-3'>
                <img src='https://travel.nicdark.com/city-tour/wp-content/uploads/sites/3/2023/04/icon-003.gif' className='img-fluid '></img>
                <h5 className='fw-bold'>City Walk Tour</h5>
              </div>
            </div>
          </div>

          <div className='container py-3'>
            <div className='row gy-3'>
              {[1, 2, 3].map((data, index) =>
                <div key={index} className='col-md-6 col-lg-4 '>
                  <Card>
                    <Card.Img variant="top" src="https://travel.nicdark.com/city-tour/wp-content/uploads/sites/3/2023/04/package-07.jpg" />
                    <Card.Body className=''>
                      <div className=' card-box d-flex justify-content-between shadow p-2 rounded'>
                        <span>5 Days</span>
                        <span>Icons</span>
                      </div>
                      <Card.Title>Toscany</Card.Title>
                      <p>Italy</p>
                      <Card.Text>
                        Whether you're looking for a romantic tour, Tuscany is the perfect destination for a true Italian experience.
                      </Card.Text>
                      <hr />
                      <div className='row justify-content-between align-items-center'>
                        <div className='col-8'>
                          <Button variant="primary">Details</Button>
                        </div>
                        <div className='col-4'>
                          <p>From</p>
                          <h4>$789</h4>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </div>
            <div className='row py-5 justify-content-center'>
              <div className='col-sm-8 col-md-7 col-lg-6 col-12  text-center py-2'>
                <div className='d-flex flex-column gap-3 align-items-center'>
                  <span>Dream Vacation Destination</span>
                  <h2>Plan the Trip of a Lifetime with Ease</h2>
                  <p>Whether you're looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, a travel agency can provide you with a custom-tailored itinerary that exceeds your expectations.</p>
                </div>
              </div>
              <Form>
                <div className='row justify-content-center rounded shadow py-3 align-items-center'>
                  <div className='col-md-3'>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                      <Form.Label>Search</Form.Label>
                      <Form.Control type="text" placeholder="Insert Keyword" className='input-box' />
                    </Form.Group>
                  </div>
                  <div className='col-md-3'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label>Destination</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>All Destinations</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className='col-md-3'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label>Typologies</Form.Label>
                      <Form.Select aria-label="Typologies">
                        <option>All typologies</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className='col-md-3'>
                    <Button variant="primary ">Primary</Button>{' '}
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className='row align-items-center py-5'>
            <div className='col-md-6'>
              <div className='d-flex flex-column gap-3'>
                <span>Next Adventure</span>
                <h2>Travel Destinations Available Worldwide.</h2>
                <p>We have compiled a list of top destinations across the globe, scoured the world for the most alluring and fascinating places to visit. From the beautiful beaches of the Caribbean to the majestic mountains of Europe and the vibrant cities of Asia, our destination list has something for everyone.</p>
                <button className='btn btn-primary '>More Info</button>
              </div>
            </div>
          </div>
          <div className='row align-items-center py-5 gy-3 position-relative'>
            <div className='col-sm-6 col-md-4 col-lg-3 position-relative'>
              <div className='contentBox'>
                <div className='text d-flex flex-column justify-content-center align-items-center gap-2 '>
                  <h3 className='fw-bold'>U.S.A</h3>
                  <p className='title'>Here is filled with diverse cultures & cities</p>
                  <button className='btn btn-primary fw-bold'>All Packages</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 position-relative'>
              <div className='contentBox Imgbox2'>
                <div className='text d-flex flex-column justify-content-center align-items-center gap-2 '>
                  <h3 className='fw-bold'>Japan</h3>
                  <p className='title'>Here is filled with diverse cultures & cities</p>
                  <button className='btn btn-primary fw-bold'>All Packages</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 position-relative'>
              <div className='contentBox Imgbox3'>
                <div className='text d-flex flex-column justify-content-center align-items-center gap-2 '>
                  <h3 className='fw-bold'>California</h3>
                  <p className='title'>Here is filled with diverse cultures & cities</p>
                  <button className='btn btn-primary fw-bold'>All Packages</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3 position-relative'>
              <div className='contentBox Imgbox4'>
                <div className='text d-flex flex-column justify-content-center align-items-center gap-2 '>
                  <h3 className='fw-bold'>Italy</h3>
                  <p className='title'>Here is filled with diverse cultures & cities</p>
                  <button className='btn btn-primary fw-bold'>All Packages</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-img d-flex justify-content-center align-items-center text-white position-relative'></div>
        <div className='textcontent position-absolute '>
          <div className='row'>
            <div className='col-md-8 col-12'>
              <h1>Unforgettable Travel Experiences</h1>
              <p>Our customer's feedback is essential in building a great reputation and maintaining excellent service. By listening to our customer's needs, we can improve our offerings and provide an exceptional travel experience.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import "../assets/card.css"

function BasicExample() {
    return (
        <div className='container py-3'>
            <div className='row gy-3'>
                {[1, 2, 3].map((data, _) =>
                    <div key={data.index} className='col-md-6 col-lg-4 '>

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


    );
}

export default BasicExample;
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

function Workwithme({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className=''>Work With Me</Modal.Title>
            </Modal.Header>
            <Modal.Body className='border-0 border-none'>
                <div className='row gy-4'>
               
                     
                  
                    <div className='col-12'>
                        <div className='content d-flex gap-3 justify-content-start align-items-center'>
                            <FaPhoneAlt fontSize={"20px"} />
                            <p>+91-9758680778</p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='content d-flex gap-3 justify-content-start align-items-center'>
                            <FaEnvelope fontSize={"20px"} />
                            <p>Aliiasif3958@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='content d-flex gap-3 justify-content-start align-items-center'>
                            <RiWhatsappFill fontSize={"20px"} />
                            <p>+91-9758680778</p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='content modaltext'>
                            <p className='mt-4'>
                                <strong>Transform Your Ideas into Stunning Websites! <br /></strong> 
                                As a front-end developer specializing in creating and designing websites, I am passionate about bringing your vision to life using CSS and various CSS frameworks. Whether you need a freelance, part-time, or full-time developer, I'm ready to help you build beautiful, responsive, and user-friendly websites. Let's collaborate to create something extraordinary.
                            </p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Workwithme;

import React from 'react'
import Class1Img from '../assets/img/classes-1.jpg'
import Class2Img from '../assets/img/classes-2.jpg'
import Class3Img from '../assets/img/classes-3.jpg'
import Class4Img from '../assets/img/classes-4.jpg'
import Class5Img from '../assets/img/classes-5.jpg'
import Class6Img from '../assets/img/classes-6.jpg'
import UserImg from '../assets/img/user.jpg'

const SchoolClasses = () => {
    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "600px"}}>
                        <h1 class="mb-3">School Classes</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                            eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src={Class1Img} alt/>
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href>Art & Drawing</a>
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src={UserImg} alt
                                                style={{"width": "45px", "height": "45px"}}/>
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Jhon Doe</h6>
                                                    <small>Teacher</small>
                                                </div>
                                        </div>
                                        <span class="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
                                    </div>
                                    <div class="row g-1">
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Age:</h6>
                                                <small>3-5 Years</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Time:</h6>
                                                <small>9-10 AM</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Capacity:</h6>
                                                <small>30 Kids</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src={Class2Img} alt/>
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href>Color Management</a>
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src={UserImg} alt
                                               style={{"width": "45px", "height": "45px"}}/>
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Jhon Doe</h6>
                                                    <small>Teacher</small>
                                                </div>
                                        </div>
                                        <span class="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
                                    </div>
                                    <div class="row g-1">
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Age:</h6>
                                                <small>3-5 Years</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Time:</h6>
                                                <small>9-10 AM</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Capacity:</h6>
                                                <small>30 Kids</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src={Class3Img} alt/>
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href>Athletic & Dance</a>
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src={UserImg} alt
                                               style={{"width": "45px", "height": "45px"}}/>
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Jhon Doe</h6>
                                                    <small>Teacher</small>
                                                </div>
                                        </div>
                                        <span class="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
                                    </div>
                                    <div class="row g-1">
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Age:</h6>
                                                <small>3-5 Years</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Time:</h6>
                                                <small>9-10 AM</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Capacity:</h6>
                                                <small>30 Kids</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src={Class4Img}alt/>
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href>Language & Speaking</a>
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src={UserImg} alt
                                               style={{"width": "45px", "height": "45px"}}/>
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Jhon Doe</h6>
                                                    <small>Teacher</small>
                                                </div>
                                        </div>
                                        <span class="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
                                    </div>
                                    <div class="row g-1">
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Age:</h6>
                                                <small>3-5 Years</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Time:</h6>
                                                <small>9-10 AM</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Capacity:</h6>
                                                <small>30 Kids</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src={Class5Img} alt/>
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href>Religion & History</a>
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src={UserImg} alt
                                                  style={{"width": "45px", "height": "45px"}}/>
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Jhon Doe</h6>
                                                    <small>Teacher</small>
                                                </div>
                                        </div>
                                        <span class="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
                                    </div>
                                    <div class="row g-1">
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Age:</h6>
                                                <small>3-5 Years</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Time:</h6>
                                                <small>9-10 AM</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Capacity:</h6>
                                                <small>30 Kids</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="classes-item">
                                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img class="img-fluid rounded-circle" src={Class6Img} alt/>
                                </div>
                                <div class="bg-light rounded p-4 pt-5 mt-n5">
                                    <a class="d-block text-center h3 mt-3 mb-4" href>General Knowledge</a>
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle flex-shrink-0" src={UserImg} alt
                                                  style={{"width": "45px", "height": "45px"}}/>
                                                <div class="ms-3">
                                                    <h6 class="text-primary mb-1">Jhon Doe</h6>
                                                    <small>Teacher</small>
                                                </div>
                                        </div>
                                        <span class="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
                                    </div>
                                    <div class="row g-1">
                                        <div class="col-4">
                                            <div class="border-top border-3 border-primary pt-2">
                                                <h6 class="text-primary mb-1">Age:</h6>
                                                <small>3-5 Years</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-success pt-2">
                                                <h6 class="text-success mb-1">Time:</h6>
                                                <small>9-10 AM</small>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="border-top border-3 border-warning pt-2">
                                                <h6 class="text-warning mb-1">Capacity:</h6>
                                                <small>30 Kids</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SchoolClasses
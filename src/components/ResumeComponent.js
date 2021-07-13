import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Media, ReactFragment } from "reactstrap";
import { Link } from "react-router-dom";

function RenderPartner({ partner }) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object src={partner.image} alt={partner.name} width="150" />
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name}</Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        );
    }
    return <div />;
}

function Resume(props) {
    const partners = props.partners.map((partner) => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner} />
            </Media>
        );
    });

    return (
        <div id="resume" className="container resume" data-aos="fade-up">
            <div className="row">
                <div className="col">
                    <Breadcrumb dark>
                        <BreadcrumbItem>
                            <Link className="link" to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Resume</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Resume</h2>
                    <hr />
                </div>
            </div>
            <React.Fragment>
            <div class="row">
                <div class="col-lg-6">
                    <h3 class="resume-title">Sumary</h3>
                    <div class="resume-item pb-0">
                        <h4>Daniel Constante</h4>
                        <p><em>Web developer able to build a Web presence from the ground up -- from concept,
                            navigation, layout and programming to UX and SEO.</em></p>
                        <ul>
                            <li>Skilled at writing well-designed, testable and efficient code using current best
                                practices in Web development.</li>
                            <li>Fast learner, hard worker and team player who is proficient in an array of
                                scripting languages and multimedia Web tools</li>
                            <li>DFW AREA, Aubrey, TX</li>
                            <li>(469) 703-5148</li>
                            <li>daniel_constante86@hotmail.com</li>
                        </ul>
                    </div>
                    <h3 class="resume-title">Education</h3>
                    <div class="resume-item">
                        <h4>Bussiness Administration</h4>
                        <h5>2006 - 2008</h5>
                        <p><em>Central University, Quito, EC</em></p>
                        <p>Business Administration experienced, who is dedicated to creating efficiency at all
                            levels
                            of management. Adept at critical analysis, developing comprehensive reports for
                            management,
                            and working as part of a team.</p>
                    </div>
                    <div class="resume-item">
                        <h4>Web Development Fundamentals</h4>
                        <h5>2020 - 2021</h5>
                        <p><em>Nucamp Coding Bootcamp.</em></p>
                        <p>HTML, CSS, and JavaScript. Build your foundation with these three pillars of the
                            Internet.</p>
                    </div>
                    <div class="resume-item">
                        <h4>Full Stack Web and Mobile App Developer</h4>
                        <h5>2020 - 2021</h5>
                        <p><em>Nucamp Coding Bootcamp.</em></p>
                        <p>HTML, CSS, JavaScript, Jquery, Bootstrap, React, React Native, SASS, Social Media
                            Marketing</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h3 class="resume-title">Skills  Attributes</h3>
                    <div class="resume-item">
                        <h4>Web Development</h4>
                        <ul>
                            <li>Strong analytical  research skills</li>
                            <li>Critical thinking, problem solving </li>
                            <li>Mediation and arbitration</li>
                            <li>Excellent written communication</li>
                            <li>Extreme attention to detail</li>
                        </ul>
                    </div>
                    <h3 class="resume-title">Languages</h3>
                    <div class="resume-item">
                        <ul>
                            <li> English</li>
                            <li> Spanish</li>
                        </ul>
                    </div>
                    <h3 class="resume-title">Certifications</h3>
                    <div class="resume-item">
                        <h4>Full Stack Web and Mobile App Developer</h4>
                        <p><em>Nucamp Coding BootCamp.</em><br />September 2021</p>
                        <h4>Amazon Web Services Cloud Practitioner (AWS) </h4>
                        <p><em>Amazon Web Services Inc.</em><br />March 2021</p>
                        <h4>Project Management Professional (PMP) </h4>
                        <p><em>Udemy, Inc.</em><br />February 2021</p>
                    </div>
                </div>
            </div>
            </React.Fragment>
        </div>
      
    );
}

export default Resume;

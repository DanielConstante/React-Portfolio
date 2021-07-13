import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Media } from "reactstrap";
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

function About(props) {
    const partners = props.partners.map((partner) => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner} />
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb dark>
                        <BreadcrumbItem>
                            <Link className="link" to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About</h2>
                    <hr />
                </div>
            </div>
            <div className="row" id="about">
                <div class="col-lg-4 mt-lg-5">
                    <img id="aboutPic" src="/assets/images/dcabout.jpg" class="img-fluid" alt="daniel profile"></img>
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content mt-lg-5">
                    <h3>Web Developer &amp; UI/UX Designer.</h3>

                    <p class="font-BioRhyme">

                        I’m a Front-End Developer located in Dallas/DFW Area. I have a serious passion for
                        develop webs
                        and UI effects, animations and creating intuitive, dynamic user experiences.

                        Well-organised person, problem solver, independent employee with high attention to
                        detail. Fan
                        of video games, outdoor activities, TV series and Action movies. A family person and
                        father of
                        three kids,

                    </p>
                    <div class="row" id="ul">
                        <div class="col-lg-6">
                            <ul>
                                <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> August
                                    20,
                                    1986
                                </li>
                                <li><i class="icofont-rounded-right"></i> <strong>Website:</strong> www.danielconstante.com</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> 469-703-5148</li>
                                <li><i class="icofont-rounded-right"></i> <strong>City:</strong> New Jersey, USA</li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                                <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 34</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> daniel_constante@hotmail.com</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        I help designers, small agencies and businesses bring their ideas to life. Powered
                        by VS
                        Code,
                        Wordpress or Bootstrap.
                        Interested in the entire frontend spectrum and working on ambitious projects with
                        positive
                        people.
                    </p>
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">
                                    Writing the first 90 percent of a computer program takes 90 percent of the time. The
                                    remaining ten
                                    percent also takes 90
                                    percent of the time and the final touches also take 90 percent of the time..
                                </p>
                                <footer className="blockquote-footer">
                                    N.J. Rubenking.{" "}
                                    <cite title="Source Title">

                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;

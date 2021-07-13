import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({ campsite }) {
    return (
        <Card style={{width:"100%", height:"100%"}}>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link className="link" to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Portfolio</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Portfolio</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
               {directory}
            </div> 
            <h2>Links to Websites</h2>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md m-1 text-center">
                        <a href="https://wordsanimations.netlify.app/" type="button" role="button" id="words" className="btn" target="_blank" rel="noreferrer">Words
                            Animations</a>
                    </div>
                    <div className="col-md m-1 text-center">
                        <a href="https://danielconstante.netlify.app/matching-game" type="button" role="button" id="smile" class="btn" target="_blank" rel="noreferrer">Smile
                            Matching Game</a>
                    </div>
                    <div className="col-md m-1 text-center">
                        <a href="https://nucampsitetx.netlify.app/" type="button" role="button" id="number" className="btn"
                            target="_blank" rel="noreferrer">Campsite TX</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md m-5 text-center">
                    <a href="https://danielconstante.netlify.app" type="button" role="button" id="personal" className="btn" target="_blank" rel="noreferrer">Bootstrap Portfolio</a>
                </div>
                <div className="col-md m-5 text-center">
                    <a href="https://react-campsites.netlify.app/" type="button" role="button" id="number" className="btn"
                        target="_blank" rel="noreferrer"> React Campsites </a>
                </div>
                <div className="col-md m-5 text-center">
                    <a href="https://danielconstantereact.netlify.app/" type="button" role="button" id="number" className="btn"
                        target="_blank" rel="noreferrer"> React Portfolio </a>
                </div>
            </div>
        </div>
    );
}



export default Directory;




























import React from "react";
import { Link } from "react-router-dom";

function Project(){

    return(
        <div className="project">
            <div className="back-link">
                <Link to={"/"}>Go back to all my works</Link>
            </div>
            <div className="project-image">
                
            </div>
            <h1>Title Project</h1>
            <h2>Used tech</h2>
            <p>Long as descriptionjl kdjmlksjdqflmsqdflkdsqf f sq fsqd fqsf sfdnsd flknsdlkfjsldmkfj lkmsdjflmdksfjmlskd jfmlkdsjflmkqsj flmkdjfl kmqsjflmkd kqsjdflkmjslmf kjslmkfjslkmdj flskdjlmsdjf</p>
            <div className="other-images">
                <div className="image">

                </div>
                <div className="image">

                </div>
                <div className="image">

                </div>
                <div className="image">

                </div>
            </div>
            <a href="" className="link">View project on github</a>
        </div>
    );

}

export default Project;
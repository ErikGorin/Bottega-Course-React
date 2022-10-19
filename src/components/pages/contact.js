import React from "react";
import contactPagePicture from "../../../static/assets/images/tudor-baciu-vc3iVL_znJ8-unsplash.jpg";

export default function(){
    return (<div
        className="content-page-wrapper">
            <div className="left-column"
                 style={{
                    background: "url(" + contactPagePicture + ") no-repeat" , 
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                 }}
                 ></div>
            <div className="right-column">
                <div className="contact-bullet-poits">
                    <div className="bullet-point-group">
                        <div className="icon">
                            {'>'}
                        </div>
                        <div className="text">
                            555-555-555
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
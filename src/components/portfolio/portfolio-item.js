import React from "react";
import {Link} from "react-router-dom";

export default function(props){
    
    const { id, description, thumb_image_url, logo } = props.item;
    return(
        <div className="portfolio-item-wrapper">
            <div 
                className="portfolio-img-background"
                style={{
                    backgroundImage: "url("+ thumb_image_url+")"
                }}
            />

            {/* <img src={thumb_image_url}></img> */}
            <img src={logo}></img>
            <dev>{description}</dev>
            <Link to={`/portfolio/${id}`}>Link</Link> 
        </div>
    )
}
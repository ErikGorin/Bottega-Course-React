import React from "react";

const BlogFeaturedImage = props => {
    if(!props.img){
        return null;
    }

    return(
        <div className="featured-image-wrapper"><img src={props.img}/></div>
    )
    // {featured_image_url ? (
    //     ): null}
}
export default BlogFeaturedImage;
import React from "react";
import "./BannerCategory.css";

function BannerCategory(props) {
    return (
        <div className="banner_category">
            {props.name}
        </div>
    );
}

export default BannerCategory;
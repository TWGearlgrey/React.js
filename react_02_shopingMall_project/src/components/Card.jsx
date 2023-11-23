import React from "react";
import {Link} from "react-router-dom";
import data from "../dataObject/paintingData";

function Card({ paintings }) {
    const defaultImageUrl = "/product/915_1673_5141.jpg";
    paintings.forEach(paint => {
        if (!paint.url) {
            paint.url = defaultImageUrl;
        }
    });

    return (<>
        {paintings.map((paint, index) => (
                <div className="content-box">
                    <Link to={`/view/` + paint.id} key={index}>
                        <img src={process.env.PUBLIC_URL + paint.url} alt={paint.title} />
                        <h4>{paint.title}</h4>
                        <p>{paint.content}</p>
                        <p>{paint.price}</p>
                    </Link>
                </div>
            )
        )}
    </>);
}
export default Card;
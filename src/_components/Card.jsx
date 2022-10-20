import { Link } from "react-router-dom";
import React from "react";

const Card = ({ classnames = "", dataItem, best = false }) => {
    const { title, price, country, id, image } = dataItem;

    return (
        <article className={`card ${classnames} ${best ? "card_best" : ""}`}>
            <Link to={`/coffee/${id}`} className="card__image-ibg">
                <img src={image} alt={title} />
            </Link>
            <div className="card__body">
                <Link to={`/coffee/${id}`} className="card__title">
                    {title}
                </Link>
                {best ? null : <div className="card__country">{country}</div>}
                <div className="card__price">{price}</div>
            </div>
        </article>
    );
};

export default Card;

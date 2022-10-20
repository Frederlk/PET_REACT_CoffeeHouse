import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { images, data } from "../constants";
import { BeansSeparator, Top } from "../_components";

const ProductPage = () => {
    const { id } = useParams();

    const loadData = () => {
        const [itemData] = data.coffee.filter((item) => item.id.toString() === id);
        return itemData;
    };

    const [itemData, setItemData] = useState(loadData),
        { title, price, country, description, image } = itemData;

    useEffect(() => {
        loadData();
        setItemData(itemData);
    }, [id]);

    return (
        <>
            <Helmet>
                <meta name={description} content={title} />
                <title>{title}</title>
            </Helmet>

            <Top image={images.bg2} title={title} />

            <section className="product">
                <div className="product__container">
                    <div className="product__image-ibg">
                        <img src={image} alt={title} />
                    </div>
                    <div className="product__body">
                        <h2 className="product__title subtitle">About it</h2>
                        <BeansSeparator classnames="product__separatopr" />
                        <div className="product__label">
                            <span>Country:</span> {country}
                        </div>
                        <div className="product__label">
                            <span>Description:</span> {description}
                        </div>
                        <div className="product__label ">
                            <span>Price:</span>
                            <span className="product__label_price"> {price}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductPage;

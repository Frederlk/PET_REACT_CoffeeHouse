import React from 'react'
import { Parallax } from 'react-parallax'

const Top = ({ image, title }) => {
    return (
        <Parallax
            bgImage={image}
            bgImageAlt="Background"
            strength={200}
            className="top"
            bgClassName="top__bg"
        >
            <section className="top__content">
                <div className="top__container">
                    <h1 className="top__title title">
                        {title}
                    </h1>
                </div>
            </section>
        </Parallax>
    )
}

export default Top;
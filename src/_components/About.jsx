import React from 'react'
import { BeansSeparator } from './';

const About = ({ classnames = '', children, title, image = false }) => {
    const AboutLayot = () => (
        <div className="about__content">
            <h2 className="about__title subtitle">{title}</h2>
            <BeansSeparator classnames='about__separator' />
            <div className="about__text">{children}</div>
        </div>
    )

    return (
        <section className={`about ${classnames}`}>
            <div className="about__container">
                {!image ? <AboutLayot /> :
                    <div className="about__body">
                        <div data-da=".about__content,650.98,2" className="about__image-ibg">
                            <img src={image} alt={title} />
                        </div>
                        <AboutLayot />
                    </div>}
            </div>
        </section >
    )
}

export default About
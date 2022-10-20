import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { data, images } from "../constants";
import { About, BeansSeparator } from "../_components";
import Card from "../_components/Card";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta name="Coffee House" content="Everything You Love About Coffee" />
                <title>Coffee House</title>
            </Helmet>

            <Parallax bgImage={images.mainBG} bgImageAlt="Background" strength={150} className="home-screen">
                <section data-fullscreen="" className="home-screen__content">
                    <div className="home-screen__container">
                        <h1 className="home-screen__title title">Everything You Love About Coffee</h1>
                        <BeansSeparator classnames="home-screen__separator white" />
                        <div className="home-screen__subtitile subtitle">
                            <p>We makes every day full of energy and taste</p>
                            <p>Want to try our beans?</p>
                        </div>
                        <Link to="/our" type="submit" className="home-screen__button">
                            More
                        </Link>
                    </div>
                </section>
            </Parallax>
            <About title="About Us" classnames="about_home">
                <p>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid
                    at highly months do things on at. Situation recommend objection do intention so questions.
                    As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.
                    Children me laughing we prospect answered followed. At it went is song that held help
                    face.
                </p>

                <p>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as
                    draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined
                    day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are
                    most gave hope. Secure active living depend son repair day ladies now.
                </p>
            </About>
            <Parallax bgImage={images.maskBG} bgImageAlt="Marble background" strength={250} className="best">
                <section className="best__container">
                    <h2 className="best__subtitle subtitle">Our best</h2>
                    <div className="best__body">
                        {data.coffee
                            .filter((item) => item.best)
                            .map((item, i) => (
                                <Card best dataItem={item} classnames="best__card" key={item.title + i} />
                            ))}
                    </div>
                </section>
            </Parallax>
        </>
    );
};

export default HomePage;

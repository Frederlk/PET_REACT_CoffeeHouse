import React from 'react'
import { Helmet } from "react-helmet";

import { images } from '../constants'
import { About, Catalog, Top } from '../_components';


const OurCoffeePage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="Our Coffee"
                    content="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                />
                <title>Our Coffee</title>
            </Helmet>

            <Top image={images.bg2} title='Our Coffee' />

            <About title='Our Coffee' classnames='about_our' image={images.ourCoffee} >
                <p>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                </p>

                <p>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </p>
            </About>

            <Catalog filters />
        </>
    )
}

export default OurCoffeePage;
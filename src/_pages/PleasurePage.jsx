import React from 'react'
import { Helmet } from "react-helmet";

import { images } from '../constants'
import { About, Catalog, Top } from '../_components';


const OurCoffeePage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="For your pleasure"
                    content="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                />
                <title>For your pleasure</title>
            </Helmet>

            <Top image={images.bg3} title='For your pleasure' />

            <About title='About Our Beans' classnames='about_our' image={images.forYourPleasure} >
                <p>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </p>

                <p>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                </p>
            </About>

            <Catalog />
        </>
    )
}

export default OurCoffeePage;
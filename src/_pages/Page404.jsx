import React from 'react'
import { Helmet } from "react-helmet";

import { images } from '../constants'
import { Top } from '../_components';


const Page404 = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="404"
                    content="Error 404"
                />
                <title>Error 404</title>
            </Helmet>

            <Top image={images.bg2} title='Error 404' />
        </>
    )
}

export default Page404;
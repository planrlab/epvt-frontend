import React from 'react';

import './index.css';

import Header from '../../components/header';
import AboutSoliMNT from './about-solimnt';
import Team from './team';

const Page = () => {
    return (
        <>
            <Header />
            <AboutSoliMNT />
            <Team />
        </>
    );
};

export default Page;

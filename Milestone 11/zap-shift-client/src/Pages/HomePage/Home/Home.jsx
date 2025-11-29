import React from 'react';
import Banner from '../Banner/Banner';
import WorkCards from '../WorkCards/WorkCards';
import Services from '../Services/Services';
import Helped from '../Helped/Helped';
import Benefits from '../Benefits/Benefits';
import Satisfaction from '../Satisfaction/Satisfaction';

const Home = () => {
    return (
        <div>
           <Banner />
           <WorkCards />
           <Services />
           <Helped  />
           <Benefits />
           <Satisfaction />
        </div>
    );
};

export default Home;
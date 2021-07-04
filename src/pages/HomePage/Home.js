import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, pricingObj } from './Data';
import { InfoSection, Pricing } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing {...pricingObj}/>
      {/* <InfoSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;

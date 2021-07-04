import React from 'react';
import { Counter, Custom, InfoSection, TechStack } from '../../components';
import {  homeObjThree, homeObjTwo,homeObjOne } from './Data';

function About() {
  return (
    <>
      
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <Counter></Counter>



    </>
  );
}

export default About;
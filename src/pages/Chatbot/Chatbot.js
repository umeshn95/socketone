import React from 'react';
import { Counter, Custom, InfoSection, TechStack } from '../../components';
import {  homeObjThree, homeObjTwo,homeObjOne } from './Data';

function Chatbot() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <Counter></Counter>
      <InfoSection {...homeObjTwo} />
      {/* <InfoSection {...homeObjOne} /> */}
      <TechStack></TechStack>
      <InfoSection {...homeObjOne} />
      <Custom></Custom>



    </>
  );
}

export default Chatbot;
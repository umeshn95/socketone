import React,{useEffect} from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { FaLaptopCode } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";
import { FcSms } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import Aos from 'aos';
import 'aos/dist/aos.css';

import { IconContext } from 'react-icons/lib';
import PricingCar from './PricingCar';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  Img
} from './Pricing.elements';

function Pricing({AOS}) {
  useEffect(() => {
    Aos.init({duration:2000});

}, [])
  return (
    <IconContext.Provider value={{ color: '#090057', size: 104 }}>
      <PricingSection  >
        <PricingWrapper>
          
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer data-aos={AOS}>
          <PricingCar
          service_link='/webdev'
          service_icon={<FaLaptopCode></FaLaptopCode>}
          service_name ='Web Development'
          service_description='Unique Web Design and Development,Our dedicated Team is continously thriving towards excellence'
          
          ></PricingCar>
           <PricingCar
          service_link='/chatbot'
           service_icon={<FcSms></FcSms>}
          service_name ='Chatbot Development'
          service_description='We Design Intelligent Chatbot With Instant Reply and Solve Business related problems'
          
          ></PricingCar>
           <PricingCar
          service_link='/schoolmanage'

           service_icon={<SiAdobeindesign></SiAdobeindesign>}
          service_name ='UI/UX Design'
          service_description='We Provide Unique and Custom UI/UX Solutions, SocketFlow has helped businesses bridge the gap between them and the customers, paving way for an amazing degree of growth and profitability.'
          
          ></PricingCar>
         
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
      
    </IconContext.Provider>
  );
}
export default Pricing;

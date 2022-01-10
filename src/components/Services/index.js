import React from 'react'
import Icon1 from '../../images/piggy.svg';
import Icon2 from '../../images/online.svg';
import Icon3 from '../../images/graph.svg';
import {
    ServicesContainer,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesWrapper,
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
           <ServicesH1>Our Services</ServicesH1> 
           <ServicesWrapper>
               <ServicesCard>
                   <ServicesIcon src={Icon1} />
                    <ServicesH2>
                        Reduce Expenses
                    </ServicesH2>
                   <ServicesP>We help reduce your fees and increase your overall revenues.</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon2} />
                    <ServicesH2>
                        Virtual Offices
                    </ServicesH2>
                   <ServicesP>You can access our platform anywhere in the world.</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon3} />
                    <ServicesH2>
                        Premium Benefits
                    </ServicesH2>
                   <ServicesP>Unlock our special membership card that returns additional 5% cashback.</ServicesP>
               </ServicesCard>
           </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services

import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Hardware/Software Solutions</ServicesH2>
          <ServicesP>
              User Management
              Security Monitoring & Response
              Hardware installation
              Full-time onsite support.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Website For Business</ServicesH2>
          <ServicesP>
            Server and Domain Support,
            Web Collage Project,
            Personal and Professional Portfolio.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Web Development Technologies</ServicesH2>
          <ServicesP>
            HTML/CSS,
            React.js,
            Express.js,
            Node.js,
            MongoDB,
            Flask,
            Django.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

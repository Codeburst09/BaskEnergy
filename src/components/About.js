import React from 'react'
import Banner from './reusables/Banner'
import solarImage from '../assets/about.png'
import VisionSection from './reusables/HeadandDescription'
import LeadershipSection from './reusables/LeadershipSection'
import InfoSection from './reusables/InfoSection'


const About = () => {
  return (
    <div >
      <Banner
      backgroundImage={solarImage}
      title="Comprehensive Finance Solutions by Bask Energy"
      description="Bask Energy offers a wide range of financial solutions tailored for businesses in the renewable energy sector, focusing on enhancing cash flow, facilitating project execution, and optimizing capital expenditure."
      buttonText="KNOW MORE"/>
        {/* About Bask Energy Section */}
        <InfoSection
        title="About Bask Energy"
        description="Bask Energy Systems India Pvt Ltd is a leading player in India's renewable energy sector, with a commitment to delivering reliable and sustainable energy solutions. We specialize in providing comprehensive services across solar power, energy storage, and electric vehicle (EV) infrastructure, ensuring that our clients can achieve their sustainability goals with the latest technologies and unmatched support."
      />
      {/* Vision Section */}
      <VisionSection
        title="Our Vision"
        description="At Bask Energy, our vision is to be at the forefront of India's transition to clean energy. We aim to power homes, businesses, and industries with affordable, reliable, and sustainable energy solutions, fostering sustainable development and reducing carbon footprints globally."
      />
       {/* More About Bask Energy Section */}
      <InfoSection
        title="More About Bask Energy"
        description={`
          Solar Power Projects: We provide end-to-end solutions, from design and engineering to procurement and construction, for residential, commercial, and utility-scale solar projects. Our expertise also extends to lease agreements and customized project finance options, making clean energy accessible to all.

          Energy Storage: Our energy storage solutions help balance power supply and demand, enhancing the reliability and efficiency of renewable energy systems. We are actively involved in major Battery Energy Storage System (BESS) projects to support energy transition efforts.

          EV Charging Infrastructure: As electric vehicles become more prevalent, Bask Energy is supporting the development of robust and scalable EV charging solutions to meet future demands.

          Raw Material Supply: With strong sourcing relationships, we supply essential solar manufacturing components, including solar cells, EVA/backsheets, glass, and more.
        `}
      />
      
      {/* Leadership Section */}
      <LeadershipSection 
        title="Leadership"
        leaderName="Chandresh Jain"
        leaderRole="CEO of Bask Energy Systems India Pvt Ltd"
        description="Under the leadership of Chandresh Jain, Bask Energy has grown to become a trusted name in the renewable energy industry. Chandresh has played a crucial role in driving the company forward through his expertise in clean energy, solar engineering, and financial strategies."
      />
      
      
    </div>
  )
}

export default About

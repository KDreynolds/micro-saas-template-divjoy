import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection2
        color="primary"
        size="large"
        backgroundImage="https://images.unsplash.com/photo-1462206092226-f46025ffe607?auto=format&fit=crop&w=1600&h=800&q=80"
        backgroundImageOpacity={0.2}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <TeamBiosSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
    </>
  );
}

export default AboutPage;

import AboutMain from "@/components/about-old/AboutMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <MetaData pageTitle="About-old">
        <Wrapper>
          <main>
            <AboutMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default AboutPage;

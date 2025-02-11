import TourGridLeftMain from "@/components/tour-grid-left/TourGridLeftMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const Hotels = () => {
  return (
    <>
      <MetaData pageTitle="Tour Grid Left">
        <Wrapper>
          <main>
            <TourGridLeftMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default Hotels;

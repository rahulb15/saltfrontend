"use client";
import TourDetailsMain from "@/components/tour-details/TourDetailsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapperNew";
import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <MetaData pageTitle="Hotel Details">
        <Wrapper>
          <main>
            <TourDetailsMain id={id} />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default page;

import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const InfoCards = () => {
  return(
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <InfoCard className="sm:col-span-1" ></InfoCard>
        <InfoCard className="sm:col-span-1" ></InfoCard>
        <InfoCard className="sm:col-span-1" ></InfoCard>
        <InfoCard className="sm:col-span-1" ></InfoCard>
      </div>
    </>
  );
};

export default InfoCards;

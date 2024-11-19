import React from "react";

import './SectionTitle.css'
interface SectionTitleProps {
  heading: string;
  subHeading?: string; 
}

const SectionTitle: React.FC<SectionTitleProps> = ({ heading, subHeading }) => {
  return (
    <div>
      <div className='sectionTitle'>
        <h2 className="text-capitalize">{heading}</h2>
        <p>{subHeading}</p>
      </div>
    </div>
  );
};

export default SectionTitle;

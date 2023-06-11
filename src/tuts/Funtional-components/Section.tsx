import React, { ReactNode } from "react";
type SectionProps = {
  title?: string;
  children: ReactNode;
};
const Section = ({ children, title = "My Sub heading" }: SectionProps) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default Section;

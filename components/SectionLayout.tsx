import { ReactNode } from "react";

const Section: React.FC<{
    title?: string; 
    children: ReactNode
  }> = ({ title, children }) => (
    <section className='section !py-10'>
      <div className="max-w-4xl mx-auto">
        {title && <h2 className='heading-1 mb-4'>{title}</h2>}
        {children}
      </div>
    </section>
);

export default Section;
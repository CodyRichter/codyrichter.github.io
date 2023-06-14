import React, { useEffect, useRef } from "react";

const NavigationSection = ({ id, onVisible, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible(id);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as per your needs
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, onVisible]);

  return (
    <div ref={sectionRef} id={`section-${id}`}>
      {children}
    </div>
  );
};

export default NavigationSection;

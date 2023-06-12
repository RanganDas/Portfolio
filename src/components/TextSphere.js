import React, { useEffect, useRef, useState } from 'react';
import TagCloud from 'TagCloud';

const TextSphere = () => {
  const sphereRef = useRef(null);
  const [sphereRadius, setSphereRadius] = useState(350);

  useEffect(() => {
    const texts = [
      'HTML',
      'CSS',
      'JAVASCRIPT',
      'C',
      'C#',
      'REACT',
      'PYTHON',
      'PHP',
      'DJANGO',
      'NODEJS',
      'MONGODB',
      'EXPRESS',
      'MYSQL',
      'JQUERY',
      'JAVA'
    ];

    const updateSphereRadius = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSphereRadius(150);
      } else if (width < 992) {
        setSphereRadius(350);
      } else {
        setSphereRadius(350);
      }
    };

    // Set the initial radius
    updateSphereRadius();

    // Configure the TagCloud instance
    const tagCloud = TagCloud(sphereRef.current, texts, {
      radius: sphereRadius,
      maxSpeed: 'normal',
      initSpeed: 'fast',
      direction: 135,
      keep: true
    });
    // Change the color of the text in the sphere
    sphereRef.current.style.color = '#01d9ff';

    // Update the radius when the window is resized
    window.addEventListener('resize', updateSphereRadius);

    // Clean up the TagCloud instance when the component is unmounted
    return () => {
      tagCloud.destroy();
      window.removeEventListener('resize', updateSphereRadius);
    };
  }, [sphereRadius]);

  return <span className="Sphere" ref={sphereRef}></span>;
};

export default TextSphere;

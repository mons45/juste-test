import React, { useState, useEffect } from 'react';

function TraqueurSouris() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>Position de la souris: X: {position.x}, Y: {position.y}</p>
    </div>
  );
}

export default TraqueurSouris;

import React, { useEffect, useState } from "react";

export function Horloge() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h1>the time is {time}</h1>;
}

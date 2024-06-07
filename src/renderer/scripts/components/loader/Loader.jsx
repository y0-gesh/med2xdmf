import React, { useState, useEffect } from "react";

function Loader() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 100) {
          clearInterval(interval);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div> {counter}% </div>
    </div>
  );
}

export default Loader;

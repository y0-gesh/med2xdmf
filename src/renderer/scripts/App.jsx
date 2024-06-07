import React, { useEffect, useRef } from "react";
import "../styles/App.css";

import DropArea from "./components/DropArea";

function App() {
  const minimizeBtnRef = useRef(null);
  const maximizeBtnRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const minimizeBtn = minimizeBtnRef.current;
    const maximizeBtn = maximizeBtnRef.current;
    const closeBtn = closeBtnRef.current;

    if (minimizeBtn) {
      minimizeBtn.addEventListener("click", () => {
        window.api.send("minimizeApp");
      });
    }
    const maximizeApp = () => {
      window.api.send("toggleMaximizeApp");
    };

    if (maximizeBtn) {
      maximizeBtn.addEventListener("click", maximizeApp);
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        window.api.send("closeApp");
      });
    }

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      if (minimizeBtn) {
        minimizeBtn.removeEventListener("click", () => {
          window.api.send("minimizeApp");
        });
      }

      if (maximizeBtn) {
        maximizeBtn.removeEventListener("click", maximizeApp);
      }

      if (closeBtn) {
        closeBtn.removeEventListener("click", () => {
          window.api.send("closeApp");
        });
      }
    };
  }, []);

  return (
    <div className="app">
      <div className="drop_area">
        <DropArea />
      </div>
    </div>
  );
}

export default App;

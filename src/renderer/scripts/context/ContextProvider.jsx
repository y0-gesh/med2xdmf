import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [files, setFiles] = useState(null);

  return (
    <StateContext.Provider value={{ files, setFiles }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

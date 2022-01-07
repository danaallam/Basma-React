import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
  const [eng, setEng] = useState(true);
  const [arabic, setArabic] = useState(false);

  const context = {
    state: { eng, arabic },
    actions: { setEng, setArabic },
  };

  return (
    <LanguageContext.Provider value={context}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;

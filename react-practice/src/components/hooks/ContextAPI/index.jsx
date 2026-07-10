import { createContext } from "react";

// step 1 creation
export const BioContext = createContext();

// step 2 provider

export const BioProvider = ({children}) =>{

  const myName = "Suhas";
  const myAge = 20;
  return <BioContext.Provider value={{myName,myAge}}>
{children}
  </BioContext.Provider>

}


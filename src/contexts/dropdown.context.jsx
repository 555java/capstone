import { createContext, useState } from "react";

export const DropdownContext = createContext({
    isOpen: false,
    products:[]
  });
  
  export const DropdownProvider = ({ children }) => {
    const [products, setProducts] = useState("");
    const value = { products };
    return (
      <DropdownContext.Provider value={value}>
        {children}
      </DropdownContext.Provider>
    );
  };
  
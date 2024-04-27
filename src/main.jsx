import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Sneakers from './Sneakers';

//Create a new context and export
export const CantidadContext = createContext();

//Create a Context Provider
const CantidadContextProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(0);

  return (
    <CantidadContext.Provider value={{cantidad, setCantidad}}>
      {children}
    </CantidadContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CantidadContextProvider>
      <Sneakers/>
    </CantidadContextProvider>
  </React.StrictMode>,
)

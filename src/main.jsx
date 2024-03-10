import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './Menu'
import Shop from  './Shop'

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
      <Menu />
      <Shop />
    </CantidadContextProvider>
  </React.StrictMode>,
)

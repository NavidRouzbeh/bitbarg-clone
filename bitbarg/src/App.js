import { RouterProvider } from "react-router-dom";
import Router from './Routes/Route'
import CoinProvider from "./Context/CoinProvider";


function App() {
  return (
    <CoinProvider>
      <RouterProvider router={Router}/>
    </CoinProvider>
    
  );
}

export default App;

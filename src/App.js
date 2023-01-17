import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Products/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

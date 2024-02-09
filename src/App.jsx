import Features from "./Components/Features";
import Header from "./Components/Header";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from "./Components/Hero";
import Question from "./Components/Question";




function App() {


  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Hero />} />
          <Route path="/freescreeners" element={<Features />} />
          <Route path="/question" element={<Question />} />

        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App

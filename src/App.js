import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import Describe from './Component/Describe/Describe';
import Product from './Component/Product/Product';
import Prodslider from './Component/Prodslider/Prodslider';
import Cannabis from './Component/Cannabis/Cannabis';
import Footer from "./Component/Footer/Footer";
import Patient from './Component/Patient/Patient';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pharma from './Component/Pharma/Pharma';
import Doctor from './Component/Doctor/Doctor';
import Curelife from './Component/Curelife/Curelife';
import Newsletter from './Component/Newsletter/Newsletter';
import News from './Component/News/News';
import Knowmore from './Component/Knowmore/Knowmore';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<>

            <Header />
            <Describe />
            <Product />
            <Prodslider />
            <Curelife />
            <Cannabis />
            <Newsletter />
            <Footer />
          </>}></Route>
          <Route path='/Patient' element={<Patient />}></Route>
          <Route path='/Pharma' element={<Pharma />}></Route>
          <Route path='/Doctor' element={<Doctor />}></Route>
          <Route path='/News' element={<News />}></Route>
          <Route path='/Knowmore' element={<Knowmore />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Login' element={<Login />}></Route>




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Form from './components/Form'
// import { Routes, Route, NavLink, Navigate, Outlet, Switch} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';
import Home from './Home'
import FormDetail from './components/FormDetail'



function App() {
  // const [count, setCount] = useState(0)
  const [products, setProducts] = useState({
    id: '',
    productName: '',
    productCategory: '',
    productFreshness: '',
    productPrice: '',
});

  return (
    <>
        {/* <Navbar/>
        <Hero/> */}
        {/* <Form/> */}

        {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-product"></NavLink>
      </nav> */}


      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="products" element={<form products={Form} />} /> */}
        {/* <Route path="/produk/:idProduk" element={<FormDetail />} />
        <Route path="/detail/:id">
          <FormDetail product = {products[id]} />
        </Route> */}

        {/* <Route path="/detail/:index" render={(props) => <FormDetail {...props} form={Form} />} /> */}
        <Route path="/detail/:id" element={<FormDetail />} />
      
      </Routes>
        {/* <ContactUs/>
        <Footer/> */}
        {/* <div>
            <img src={bootstrap_logo} className="logo" alt="Bootstrap logo"/>
        </div> */}
            {/* <Header/> */}
            {/* <Article/> */}
            {/* <FormAccount/> */}
            {/* <Form/> */}
            {/* <Button/> */}
    </>
  )
}

export default App

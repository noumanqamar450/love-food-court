import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/App.css'
import Home from './Pages/Home'
import 'swiper/css';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Container>
      <Home />
    </Container>
    <Footer/>
  </React.StrictMode>
);


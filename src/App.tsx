import Header from "./components/Header/Header";

import PageSectionWrapper from "./components/PageSectionWrapper/PageSectionWrapper";
import {Col, Container, Row} from "react-bootstrap";
import city from './assets/img/city.jpeg'
import MyCardComponent from "./components/MyCardComponent/MyCardComponent";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import React from 'react'
import MapEmbed from "./components/MapEmbed";
import AboutBlock from "./components/AboutBlock/AboutBlock";
import {Button} from "react-scroll";
import {Route, Routes, HashRouter as Router} from 'react-router-dom';
import MainPageContent from "./routes/MainPageContent";


function App() {
    const [headerHeight, setHeaderHeight] = useState(0); // State to store the height

    console.log('API Key:', import.meta.env.REACT_ENV_GOOGLE_MAPS_API_KEY);


    return (
        <Router>
            <React.Fragment>
                <Header setHeaderHeight={setHeaderHeight}/>
                <Routes>
                    <Route path="/" element={<MainPageContent headerHeight={headerHeight}/>}/>
                </Routes>
                <Footer/>
            </React.Fragment>
        </Router>)
}

export default App

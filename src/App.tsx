import Header from "./components/Header/Header";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import React from 'react'
import {Route, Routes, HashRouter as Router} from 'react-router-dom';
import MainPageContent from "./routes/MainPageContent";
import Places from "./routes/Places";


function App() {
    const [headerHeight, setHeaderHeight] = useState(0); // State to store the height

    console.log('API Key:', import.meta.env.REACT_ENV_GOOGLE_MAPS_API_KEY);



    return (
        <Router>
            <React.Fragment>
                <Header setHeaderHeight={setHeaderHeight}/>
                <Routes>
                    <Route path="/" element={<MainPageContent headerHeight={headerHeight}/>}/>
                    <Route path='/places' element={<Places/>}/>
                </Routes>
                <Footer/>
            </React.Fragment>
        </Router>)
}

export default App

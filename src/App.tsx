import Header from "./components/Header/Header";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";
import React from 'react'
import {Route, Routes, HashRouter as Router} from 'react-router-dom';
import MainPageContent from "./routes/MainPageContent";
import Places from "./routes/Places";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Імпорт стилів AOS

function App() {
    const [headerHeight, setHeaderHeight] = useState(0); // State to store the height


    useEffect(() => {
        const handleLoad = () => {
            AOS.init({
                easing: 'ease-in-out', // Тип анімації
                offset: 120, // Відстань (в пікселях) від оригінальної точки спрацьовування
                delay: 0, // Затримка (в мс)
                duration: 400, // Тривалість анімації (в мс)
                once: true, // Анімація відбудеться лише один раз
            });

            AOS.refresh(); // Оновити AOS після завантаження
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);



    return (
        <Router>
            <React.Fragment>
                <ScrollToTop/>
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

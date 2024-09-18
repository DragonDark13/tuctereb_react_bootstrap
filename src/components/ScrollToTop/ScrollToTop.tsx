import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Перевіряємо наявність хеша
        if (location.hash) {
            const elementId = location.hash.substring(1); // Видаляємо символ "#"
            const element = document.getElementById(elementId);
            debugger

            if (element) {
                element.scrollIntoView({behavior: "smooth", block: "start"});
            }
        } else {
            // Якщо хеша немає, скролимо на початок сторінки
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }, [location]);

    return null; // Цей компонент не виводить нічого
};

export default ScrollToTop;

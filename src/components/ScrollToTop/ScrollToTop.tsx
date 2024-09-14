import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        // Використовуємо setTimeout з нульовою затримкою, щоб виконати прокрутку після того, як компонент рендериться
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;

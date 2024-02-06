// Импорт компонентов из библиотеки react-router-dom, необходимых
// для реализации маршрутизации в приложении React.
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Импорт компонента Home из файла Home.js
// (или другого файла) для использования его в маршрутизации.
import { Home } from './Home'

// Импорт компонента Page404 из файла Page404.js
// (или другого файла) для использования его в маршрутизации.
import { Page404 } from './Page404'

// обертка для всей маршрутизации.
export const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}
// в этом файле динамика всей маршрутов, переходов между
//  страницами и передачи параметров между компонентами приложения.

import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main';
import NotFound from './pages/notFound/NotFound';

import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react'
import Archive from './pages/archive/Archive';
import Gallery from './pages/gallery/Gallery';
import Archeology from './pages/archeologic/Archeology';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Suspense fallback={''}>
        <Sidebar />
        <Footer />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/archive' element={<Archive/>} />
          <Route path='/archeology' element={<Archeology/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

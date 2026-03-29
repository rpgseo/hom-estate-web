import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Consulting from './pages/Consulting'
import Reformas from './pages/Reformas'
import ColivingsZaragoza from './pages/ColivingsZaragoza'
import ColivingDetail from './pages/ColivingDetail'
import ApartamentoBruc from './pages/ApartamentoBruc'
import GestionAlquiler from './pages/GestionAlquiler'
import PorQueColiving from './pages/PorQueColiving'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Legal from './pages/Legal'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/reformas" element={<Reformas />} />
          <Route path="/colivings-zaragoza" element={<ColivingsZaragoza />} />
          <Route path="/coliving-zaragoza" element={<ColivingDetail />} />
          <Route path="/coliving-zaragoza-sagasta" element={<ColivingDetail />} />
          <Route path="/coliving-zaragoza-tb11" element={<ColivingDetail />} />
          <Route path="/coliving-zaragoza-jjr5" element={<ColivingDetail />} />
          <Route path="/coliving-zaragoza-pc29" element={<ColivingDetail />} />
          <Route path="/coliving-zaragoza-ca47" element={<ColivingDetail />} />
          <Route path="/apartamento-bruc" element={<ApartamentoBruc />} />
          <Route path="/gestion-alquiler-habitaciones-zaragoza" element={<GestionAlquiler />} />
          <Route path="/gestion-alquiler-habitaciones-madrid" element={<GestionAlquiler />} />
          <Route path="/por-que-coliving" element={<PorQueColiving />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:slug" element={<BlogPost />} />
          <Route path="/aviso-legal" element={<Legal />} />
          <Route path="/politica-de-privacidad" element={<Legal />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

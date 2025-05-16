import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importando componentes
import Footer from "./components/footer";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Images from "./components/Images";
import NewsSection from "./components/NewsSection";

// Importando páginas
import NewsDetail from "./pages/NewsDetail";

// Importando imágenes de noticias
import busEstudiantes from "./assets/noticias/bus-estudiantes.jpg";
import cambioclimatico from "./assets/noticias/cambioclimatico.jpg";
import horario from "./assets/noticias/horario.jpg";
import permiso from "./assets/noticias/permisodecirculacion.jpeg";

function App() {
  // Arreglo de imágenes aquí
  const itemData = [
    {
      img: "src/assets/fotos/bienvenidos.jpg",
      title: "Bienvenidos a Chol-Chol",
    },
    {
      img: "src/assets/fotos/Balneario-Rio-Cholchol.jpg",
      title: "Balneario Río Chol-Chol",
    },
    {
      img: "src/assets/fotos/cruce_en_balsa.jpg",
      title: "Cruce en Balsa",
    },
    {
      img: "src/assets/fotos/mapuche.jpg",
      title: "Cultura Mapuche",
    },
    {
      img: "src/assets/fotos/Municipalidad_de_Chol-Chol.jpg",
      title: "Municipalidad de Chol-Chol",
    },
    {
      img: "src/assets/fotos/puenteviejo.jpg",
      title: "Puente Viejo",
    },
    {
      img: "src/assets/fotos/puentesdesdeabajoinvierno.jpg",
      title: "Puentes desde Abajo",
    },
    {
      img: "src/assets/fotos/Ruka-de-Cholchol.jpg",
      title: "Ruka de Chol-Chol",
    },
  ];

  const newsData = [
    {
      title: "Buses para Estudiantes",
      description: "Movilizacion de estudiantes vespertinos",
      image: busEstudiantes,
    },
    {
      title: "Taller Comunitario",
      description: "Taller sobre cambio climático",
      image: cambioclimatico,
    },
    {
      title: "Horiario de Atención",
      description: "Cambios en el horario de la Municipalidad",
      image: horario,
    },
    {
      title: "Permiso de Circulación",
      description: "Paga tu permiso de circulación Online",
      image: permiso,
    },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />
              <Hero />
              <Images images={itemData} /> {/* Imágenes como prop */}
              <NewsSection news={newsData} /> {/* Noticias como prop */}
              <ContactForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/news-detail"
          element={
            <>
              <Header />
              <NewsDetail />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

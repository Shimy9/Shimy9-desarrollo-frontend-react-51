import "./App.css";

import Footer from "./components/footer";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Fotos from "./components/Fotos";

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

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Hero />
      <Fotos images={itemData} /> {/* Imágenes como prop */}
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

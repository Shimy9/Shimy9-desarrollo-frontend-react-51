// Importando componentes
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Images from "../components/Images";
import NewsSection from "../components/NewsSection";
import MiniHeader from "../components/MiniHeader";

// Importando imágenes de noticias
import busEstudiantes from "../assets/noticias/bus-estudiantes.jpg";
import cambioclimatico from "../assets/noticias/cambioclimatico.jpg";
import horario from "../assets/noticias/horario.jpg";
import permiso from "../assets/noticias/permisodecirculacion.jpeg";

// Importando imágenes para itemData
import bienvenidos from "../assets/fotos/bienvenidos.jpg";
import balneario from "../assets/fotos/Balneario-Rio-Cholchol.jpg";
import cruce from "../assets/fotos/cruce_en_balsa.jpg";
import mapuche from "../assets/fotos/mapuche.jpg";
import municipalidad from "../assets/fotos/Municipalidad_de_Chol-Chol.jpg";
import puenteviejo from "../assets/fotos/puenteviejo.jpg";
import puentesinvierno from "../assets/fotos/puentesdesdeabajoinvierno.jpg";
import ruka from "../assets/fotos/Ruka-de-Cholchol.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Arreglo de imágenes
  const itemData = [
    {
      img: bienvenidos,
      title: "Bienvenidos a Chol-Chol",
    },
    {
      img: balneario,
      title: "Balneario Río Chol-Chol",
    },
    {
      img: cruce,
      title: "Cruce en Balsa",
    },
    {
      img: mapuche,
      title: "Cultura Mapuche",
    },
    {
      img: municipalidad,
      title: "Municipalidad de Chol-Chol",
    },
    {
      img: puenteviejo,
      title: "Puente Viejo",
    },
    {
      img: puentesinvierno,
      title: "Puentes desde Abajo",
    },
    {
      img: ruka,
      title: "Ruka de Chol-Chol",
    },
  ];

  // Arreglo de noticias
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
      title: "Horario de Atención",
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
    <>
      <MiniHeader />
      <Header />
      <Banner />
      <div id="nosotros">
        <Hero />
      </div>
      <Images images={itemData} /> {/* Imágenes como prop */}
      <div id="noticias">
        <NewsSection news={newsData} /> {/* Noticias como prop */}
      </div>
      <div id="contacto">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};
export default Home;

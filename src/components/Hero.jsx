import { useState, useEffect } from "react";
import { Box, Typography, Collapse } from "@mui/material";

const descripcion = `
Ubicada en la región de La Araucanía, Cholchol es una comuna que destaca por su herencia cultural mapuche, rodeada de verdes paisajes, ríos y campos donde la tradición ancestral se mantiene viva. Aquí, las comunidades preservan el mapudungun, la artesanía, la gastronomía y ceremonias como el We Tripantu (Año Nuevo Mapuche), combinando la tranquilidad rural con una identidad indígena fuerte. Con ferias artesanales, agricultura tradicional y una profunda conexión con la tierra, Cholchol es un lugar donde el legado mapuche late con autenticidad y orgullo.
`;

const Hero = () => {
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    // Solo para mostrar en consola cuando cambia el estado
    console.log("Descripción visible:", showDesc);
  }, [showDesc]);

  const handleTitleClick = () => {
    setShowDesc((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: 4,
        textAlign: "center",
        maxWidth: 1200,
        mx: "auto",
        px: 2, // margen interno a los lados en pantallas pequeñas
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{ cursor: "pointer", fontWeight: "bold", mb: 0 }}
        onClick={handleTitleClick}
      >
        ¡Descubre Cholchol, Tierra de Tradición Mapuche!
      </Typography>
      <Collapse in={showDesc}>
        <Typography variant="body1" sx={{ mt: 2, whiteSpace: "pre-line" }}>
          {descripcion}
        </Typography>
      </Collapse>
    </Box>
  );
};

export default Hero;

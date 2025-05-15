import { Box, Typography, Link } from "@mui/material";
//Componente de footer
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "#fff",
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body1" color="white">
        © 2025 Municipalidad de Chol-Chol. Todos los derechos reservados.
      </Typography>
      <Link href="/politica-privacidad" color="inherit">
        Política de Privacidad
      </Link>
    </Box>
  );
};
export default Footer;

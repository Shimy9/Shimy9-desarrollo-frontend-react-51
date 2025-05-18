import { Box, Typography, Link } from "@mui/material";
//Componente de footer
const Footer = () => {
  return (
    <Box 
      sx={{
        backgroundColor: "#012d3e",
        color: "#fff",
        py: 1,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "8px solid #222",
        
        
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 1, mr: 1 }}>
        <img
          src="/LOGOBLANCO.png"
          alt="Logo Municipalidad de Chol-Chol"
          style={{ height: 60 }}
        />
      </Box>
      <Typography variant="body1" color="white">
        © 2025 Municipalidad de Chol-Chol. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};
export default Footer;

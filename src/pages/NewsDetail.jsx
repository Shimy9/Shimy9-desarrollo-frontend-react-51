import { useLocation, useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button, CardMedia } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MiniHeader from "../components/MiniHeader";

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const newsItem = location.state?.newsItem;

  const handleBack = () => {
    navigate("/");
  };

  if (!newsItem) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", my: 4, color: "#fff" }}>
          Noticia no encontrada
        </Typography>
        <Button variant="contained" onClick={handleBack} sx={{
            backgroundColor: "#184c7c", 
            color: "#fff",
            "&:hover": {
              backgroundColor: "#205C9B",
            },
            mt: 2,
          }}>
          Volver
        </Button>
      </Container>
    );
  }

  return (
    <>
    <MiniHeader />
    <Header />
    <Container>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", my: 4, color: "#fff" }}>
          {newsItem.title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
          <CardMedia
            component="img"
            sx={{ width: 500, borderRadius: 2 }}
            image={newsItem.image}
            alt={newsItem.title}
          />
        </Box>
        <Button variant="contained" onClick={handleBack} sx={{
            backgroundColor: "#184c7c", 
            color: "#fff",
            "&:hover": {
              backgroundColor: "#205C9B",
            },
            mt: 2,
          }}>
          Volver
        </Button>
      </Box>
      
    </Container>
    <Footer />
    </>
);
};

export default NewsDetail;

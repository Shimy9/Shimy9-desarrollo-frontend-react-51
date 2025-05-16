import { useLocation, useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button, CardMedia } from "@mui/material";

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
        <Typography variant="h4" gutterBottom>
          Noticia no encontrada
        </Typography>
        <Button variant="contained" onClick={handleBack}>
          Volver
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
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
        <Button variant="contained" onClick={handleBack} sx={{ mt: 2 }}>
          Volver
        </Button>
      </Box>
    </Container>
  );
};

export default NewsDetail;

import {Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions ,Box , Grid} from "@mui/material";
import { useNavigate } from "react-router-dom";


const NewsSection = ({ news }) => {
  const navigate = useNavigate();
  const handleReadMore = (item) => {
    navigate("/news-detail/", { state: { newsItem: item } });
  };

  return (
    <Box sx={{ my: 6, px: 2 }}>
      <Typography
        variant="h3"
        sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
      >
        Últimas Noticias
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {news.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                width: 345, // ancho fijo
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardActionArea onClick={() => handleReadMore(item)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: "cover", objectPosition: "top" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "left" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textAlign: "left",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-start", mt: -1 }}>
                  <Button
                    size="small"
                    color="primary"
                    sx={{ mt: 1 }}
                    onClick={() => handleReadMore(item)}
                  >
                    Leer más
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsSection;

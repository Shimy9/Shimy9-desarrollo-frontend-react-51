import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Images = ({ images }) => {
  // Solo las primeras 8 imágenes para 2 filas x 4 columnas
  const imagesToShow = images.slice(0, 8);

  return (
    <ImageList
      sx={{
        width: "100%",
        maxWidth: 1200,
        margin: "40px auto",
        overflow: "hidden",
      }}
      cols={4}
      rowHeight={220}
      gap={8}
    >
      {imagesToShow.map((item) => (
        <ImageListItem key={item.img} sx={{ position: "relative" }}>
          <img
            srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=400&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              background: "rgba(0,0,0,0.5)",
              color: "white",
              padding: "8px 12px",
              fontSize: "1rem",
              boxSizing: "border-box",
              textShadow: "0 1px 4px rgba(0,0,0,0.7)",
            }}
          >
            {item.title}
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default Images;

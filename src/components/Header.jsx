import {AppBar,Toolbar,Typography,IconButton,Drawer,List,ListItem,ListItemText,Box,Avatar,Link,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  // Estado para controlar el menú lateral
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Función para abrir/cerrar el menú lateral
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

    // Opciones de navegación
  const opciones = [
    { id: 1, nombre: "Servicios", link: "#servicios" },
    { id: 2, nombre: "Contacto", link: "#contacto" },
  ];

  return (
    <>
      <AppBar position="static" >
        {/* Barra de navegación */}
        <Toolbar>
          <Box sx={{display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* Logo de la Municipalidad */}
            <Avatar alt="Logo" src="/logo.png" sx={{ marginRight: 1 }} />
            <Typography variant="h6">Municipalidad de Chol-Chol</Typography>
          </Box>
          {/* Enlaces de navegación */}
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {opciones.map((opcion, idx) => (
              <Link
                key={opcion.id}
                href={opcion.link}
                color="inherit"
                underline="none"
                sx={{ marginRight: idx !== opciones.length - 1 ? 2 : 0 }}
              >
                {opcion.nombre}
              </Link>
            ))}
          </Box>
          {/* Botón para abrir el menú en dispositivos pequeños */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Menú lateral */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {opciones.map((opcion) => (
            <ListItem button key={opcion.id} onClick={toggleDrawer(false)}>
              <ListItemText primary={opcion.nombre} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

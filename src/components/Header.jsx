import {AppBar,Toolbar,IconButton,Drawer,List,ListItem,ListItemText,Box,Avatar,Link,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logos/cholchollogo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHome = () => {
    navigate("/");
  };

  // Estado para controlar el menú lateral
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Función para abrir/cerrar el menú lateral
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Opciones de navegación
  const opciones = [
    { id: 1, nombre: "Nosotros", link: "#nosotros" },
    { id: 2, nombre: "Noticias", link: "#noticias" },
    { id: 3, nombre: "Contacto", link: "#contacto" },
  ];

  // Navegación a sección
  const handleNav = (link) => {
    if (location.pathname === "/") {
      window.location.hash = link;
    } else {
      navigate("/" + link);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#012d3e" }}>
        {/* Barra de navegación */}
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* Logo de la Municipalidad */}
            <Avatar
              alt="Logo"
              src={logo}
              sx={{ marginRight: 1, borderRadius: 0 }}
            />
            <Link
              onClick={handleHome}
              color="inherit"
              underline="none"
              sx={{
                fontSize: "1.25rem",
                transition: "color 0.2s",
                "&:hover": {
                  color: "#FFD700",
                },
                cursor: "pointer",
              }}
            >
              Municipalidad de Chol-Chol
            </Link>
          </Box>
          {/* Enlaces de navegación */}
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {opciones.map((opcion, idx) => (
              <Link
                key={opcion.id}
                component="button"
                color="inherit"
                underline="none"
                onClick={() => handleNav(opcion.link)}
                sx={{
                  marginRight: idx !== opciones.length - 1 ? 2 : 0,
                  transition: "color 0.2s",
                  "&:hover": {
                    color: "#FFD700",
                  },
                  cursor: "pointer",
                }}
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
            <ListItem
              key={opcion.id}
              onClick={() => {
                handleNav(opcion.link);
                setDrawerOpen(false);
              }}
              disablePadding
              button
            >
              <ListItemText
                primary={opcion.nombre}
                sx={{
                  padding: "16px 24px",
                  color: "inherit",
                  textDecoration: "none",
                  width: "100%",
                  display: "block",
                  cursor: "pointer",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

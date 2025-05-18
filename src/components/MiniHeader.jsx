import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import YouTubeIcon from "@mui/icons-material/YouTube";

const MiniHeader = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#222",
        height: 36,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 36,
          height: 36,
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Box  sx={{
      display: "flex",
      gap: { xs: 1, sm: 2, md: 3 },
      width: "100%",
      minWidth: 0,
      mx: "auto",
      overflow: "hidden",
    
    }}>
          {/* Hora local */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, minWidth: 0 }}>
            <AccessTimeIcon sx={{ fontSize: 15 }} />
            <Typography variant="body2" sx={{
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: { xs: 60, sm: 100 },
        }}>
              {hora.toLocaleTimeString()}
            </Typography>
          </Box>
          {/* Dirección */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, minWidth: 0 }}>
            <RoomIcon sx={{ fontSize: 15 }} />
            <Typography variant="body2" sx={{
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: { xs: 80, sm: 300 },
        }}>
              JOSÉ JOAQUÍN PÉREZ, 449, Cholchol
            </Typography>
          </Box>
          {/* Email */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, minWidth: 0 }}>
            <EmailIcon sx={{ fontSize: 15 }} />
            <Typography variant="body2" sx={{
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: { xs: 80, sm: 300 },
        }}>
              oficinadepartes@municholchol.cl
            </Typography>
          </Box>
          {/* Teléfono */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, minWidth: 0 }}>
            <PhoneIcon sx={{ fontSize: 15 }} />
            <Typography variant="body2"  sx={{
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: { xs: 60, sm: 100 },
        }}>
              452 734200
            </Typography>
          </Box>
        </Box>
        {/* YouTube */}
        <IconButton
          href="https://www.youtube.com/@MunicipalidaddeCholcholOficial/streams"
          target="_blank"
          rel="noopener"
          color="inherit"
          size="small"
          sx={{
            p: 0.5,
            "&:hover": { color: "#FF0000" },
          }}
        >
          <YouTubeIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MiniHeader;

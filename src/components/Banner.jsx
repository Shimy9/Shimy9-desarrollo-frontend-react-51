import { useState } from "react";
import { Box, Button, MobileStepper, Paper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Banner = () => {
  // Arreglo de imágenes dentro del componente
  const images = [
    "src/assets/carrusel/baseparabannercanaldeyoutube.png",
    "src/assets/carrusel/PUENTE1.jpg",
    "src/assets/carrusel/PLAZAYFRONTISMUNICIPALIDAD1.jpg",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        mt: 0,
        overflow: "hidden",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: { xs: 200, sm: 350, md: 450 },
          overflow: "hidden",
          position: "relative",
          borderRadius: 0,
          m: 0,
        }}
      >
        <img
          src={images[activeStep]}
          alt={`slide-${activeStep}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 1,
          }}
        >
          <Button
            size="small"
            onClick={handleBack}
            disabled={maxSteps <= 1}
            sx={{ color: "white", minWidth: 0 }}
          >
            <KeyboardArrowLeft />
          </Button>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              background: "transparent",
              flexGrow: 1,
              justifyContent: "center",
              ".MuiMobileStepper-dot": { bgcolor: "white" },
              ".MuiMobileStepper-dotActive": { bgcolor: "primary.main" },
            }}
            nextButton={null}
            backButton={null}
          />
          <Button
            size="small"
            onClick={handleNext}
            disabled={maxSteps <= 1}
            sx={{ color: "white", minWidth: 0 }}
          >
            <KeyboardArrowRight />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Banner;

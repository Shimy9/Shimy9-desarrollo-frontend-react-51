import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = () => {
  // Estado para manejar los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setError] = useState({});
  const [success, setSuccess] = useState(false);

  // Función para manejar el envío del formulario
  const validateForm = () => {
    const newErrors = {};
    // Validación de los campos
    if (!formData.name) newErrors.name = "El nombre es requerido";
    if (!formData.email) newErrors.email = "El correo electrónico es requerido";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "El correo electrónico no es válido";
    if (!formData.message) newErrors.message = "El mensaje es requerido";
    return newErrors;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setSuccess(false);
      setError(validationErrors);
    } else {
      setError({});
      setSuccess(true);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 4,
          mb: 4,
          p: 2,
          borderRadius: 1,
          boxShadow: 3,
          backgroundColor: "#fff"
          , border:"1px solid #222",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Contacto
        </Typography>
        {/* Campo para el nombre */}
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={!!errors.name}
          helperText={errors.name}
        />
        {/* Campo para el correo electrónico */}
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
        />
        {/* Campo para el mensaje */}
        <TextField
          label="Mensaje"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          error={!!errors.message}
          helperText={errors.message}
        />
        {/* Botón de enviar */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#184c7c", 
            color: "#fff",
            "&:hover": {
              backgroundColor: "#205C9B",
            },
            mt: 2,
          }}
        >
          Enviar
        </Button>
        {/* Mensaje de éxito */}
        {success && (
          <Typography variant="body1" color="green" sx={{ mt: 2 }}>
            Mensaje enviado con éxito
          </Typography>
        )}
        {/* Mensaje de error */}
        {Object.values(errors).length > 0 && (
          <Typography color="error.main" sx={{ mt: 2 }}>
            {Object.values(errors).map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default ContactForm;

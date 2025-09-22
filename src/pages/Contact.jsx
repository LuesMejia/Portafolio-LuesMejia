import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <Box
      sx={{
        backgroundColor: "#D4BBA0",
        minHeight: "80vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#111827",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        Contáctame
      </Typography>

      {/* FORMULARIO */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <TextField 
        label="Tu nombre"
         variant="outlined"
          fullWidth
           />
        <TextField label="Tu correo" type="email" variant="outlined" fullWidth />
        <TextField
          label="Tu mensaje"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#111827",
            color: "#F7F7F5",
            fontWeight: "bold",
            padding: "0.7rem 1.2rem",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#333333" },
          }}
        >
          Enviar
        </Button>
      </Box>

      {/* REDES SOCIALES */}
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/luesbelin-mejia-154546279/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#111827" }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.instagram.com/luesmejia_15/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#111827" }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:luesbelinmejia935@gmail.com"
          sx={{ color: "#111827" }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}

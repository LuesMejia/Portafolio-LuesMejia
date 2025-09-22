import React from "react";
import { Grid, Box, Typography, Button, List, ListItem } from "@mui/material";

import Foto2 from "../img/Foto2.png";

export default function About({ dark }) {
  return (
    <Box
      sx={{
        backgroundColor: dark ? "#e8e9f3" : "#F7F7F5",
        padding: { xs: "2rem 1rem", md: "6rem 8rem" },
      }}
    >
      {/* Título animado */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.5rem", md: "4rem" },
          fontWeight: "bold",
          color: "#D4BBA0",
          whiteSpace: "nowrap",
          overflow: "hidden",
          borderRight: "2px solid #111827",
          width: "0",
          margin: "0 auto",
          marginBottom: "3rem",
          display: "block",
          textAlign: "center",
          animation:
            "typing 2s steps(9) forwards, blink 0.7s step-end 3",
          "@keyframes typing": {
            "0%": { width: "0" },
            "100%": { width: "9ch" }, // número de caracteres de "Sobre Mí_"
          },
          "@keyframes blink": {
            "0%": { borderColor: "#111827" },
            "100%": { borderColor: "transparent" },
          },
        }}
      >
        Sobre Mí_
      </Typography>

      {/* Contenido */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "1000px", margin: "3rem auto 0" }}
      >
        {/* Texto */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: "#111827",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              marginBottom: "1rem",
            }}
          >
     Como desarrolladora en constante aprendizaje, busco mejorar cada día mis habilidades para construir proyectos escalables y con impacto.
          </Typography>

          <List sx={{ paddingLeft: "0" }}>
            {[
              "Nombre:  Luesbelin Mejia",
              "Fecha de nacimiento: Septiembre 12, 2002",
              "Dirección: Honduras, Tegucigalpa",
              "Correo electrónico: luesbelinmejia935@gmail.com",
              "Teléfono: +504 9809-2480",
              "Idiomas: Español (nativo), Inglés (Básico)",
              "Años de Experiencia: 1 años en el rubro del desarrollo",
            ].map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "#E7D8C9",
                  borderRadius: "8px",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                  padding: "0.5rem 1rem",
                  display: "block",
                  listStyleType: "disc",
                }}
              >
                {item}
              </ListItem>
            ))}
          </List>

          <Button
            href="/CV.pdf"
            variant="outlined"
            sx={{
              border: "2px solid #111827",
              color: "#111827",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              fontWeight: "bold",
              display: "flex",

              "&:hover": {
                border: "2px solid #111827",
                backgroundColor: "rgba(17, 24, 39, 0.04)",
              },
            }}
          >
            Descargar CV
          </Button>
        </Grid>

        {/* Imagen */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Foto2}
            alt="Foto personal"
            sx={{
              width: "100%",
              maxWidth: "350px",
              borderRadius: "12px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

import simvre from "../img/simvre.png";
import sie from "../img/siemonitoreo.png";
import sinafod from "../img/sinafod.png";
import siie from "../img/siie.png";

const projectsSample = [
  {
    id: 1,
    title: "SIMVRE",
    description:
      "Desarrollo de sistema integral para la digitalización y automatización de procesos que se realizaban de forma manual como gestión de inventarios, clientes, compras y alquileres.",
    tags: ["React", "Material-UI", "JS", "Excel-JS"],
    href: "#",
    image: simvre,
  },
  {
    id: 2,
    title: "SIE MONITOREO",
    description:
      "Creación de un sistema para gestionar y consolidar información de candidatos en busca de empleo, registro de actores, manejo de directorio empresarial y seguimiento de las derivaciones e intermediaciones laborales de los candidatos.",
    tags: ["React", "JS", "Material-UI"],
    href: "#",
    image: sie,
  },
  {
    id: 3,
    title: "SINAFOD",
    description:
      "Creación de un sistema para el control del cumplimiento de los lineamientos, así como del registro y seguimiento de la cantidad de formaciones impartidas e investigaciones realizadas por las unidades correspondientes. El sistema también permite el control y registro de los participantes en dichas formaciones e investigaciones.",
    tags: ["React", "JS", "Material-UI", "Excel-JS", "Pdf-JS"],
    href: "#",
    image: sinafod,
  },
  {
    id: 4,
    title: "SIIE",
    description:
      "Desarrollo de página web con React y Material UI, integrando tableros de Power BI para la visualización interactiva de estadísticas del sector educativo, facilitando el acceso a información confiable y relevante sobre el país.",
    tags: ["React", "JS", "Material-UI", "Power BI"],
    href: "https://siie.coned.gob.hn/",
    image: siie,
  },
];

export default function Projects({ dark, setDark }) {
  return (
    <Box
      sx={{
        backgroundColor: dark ? "#e8e9f3" : "#F7F7F5",
        padding: { xs: "2rem 1rem", md: "6rem 8rem" },
      }}
    >
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
            "100%": { width: "10ch" }, 
          },
          "@keyframes blink": {
            "0%": { borderColor: "#111827" },
            "100%": { borderColor: "transparent" },
          },
        }}
      >
      Proyectos_
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projectsSample.map((project) => (
          <Grid item size={{ xs: 12,sm:6, md: 3 }} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
} from "@mui/material";

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 345,
        height: "100%", // ocupa toda la altura disponible del grid
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F3EDE7",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={project.image}
        alt={project.title}
        sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#111827", fontWeight: "bold", mb: 1 }}
        >
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#444", mb: 2, flexGrow: 1,textAlign: "justify" }}>
          {project.description}
        </Typography>
        <div style={{ marginBottom: "12px" }}>
          {project.tags.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                mr: 0.5,
                mb: 0.5,
                backgroundColor: "#E7D8C9",
                color: "#111827",
                fontWeight: "500",
              }}
            />
          ))}
        </div>
        <Button
          size="small"
          href={project.href}
          variant="contained"
          sx={{
            backgroundColor: "#111827",
            color: "#F7F7F5",
            "&:hover": { backgroundColor: "#D4BBA0", color: "#111827" },
          }}
        >
          Ver
        </Button>
      </CardContent>
    </Card>
  );
}

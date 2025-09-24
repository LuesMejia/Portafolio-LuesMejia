import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";


export default function Footer({ dark }) {
  const styles = {
    footer: {
      backgroundColor: dark ? "#111827" : "#F3EDE7",
      color: dark ? "#F7F7F5" : "#111827",
      textAlign: "center",
      padding: "2rem",

    },
  };

  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Portafolio Luesbelin Mejia. Todos los derechos reservados.
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
          sx={{ color: dark ? "#F3EDE7":"#111827" }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.instagram.com/luesmejia_15/"
          target="_blank"
          rel="noopener noreferrer"
           sx={{ color: dark ? "#F3EDE7":"#111827" }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:luesbelinmejia935@gmail.com"
            sx={{ color: dark ? "#F3EDE7":"#111827" }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>
    </footer>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
  Fade
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Foto from "../img/Foto.png";
import Foto2 from "../img/Foto2.png";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const name = "Luesbelin Mejia";

  // Contenido de los slides
  const slides = [
    // Slide 1: Nombre y foto principal
 {
  title: (
    <Typography
      variant="h1"
      sx={{
        marginBottom: "1rem",
        fontSize: { xs: "4rem", md: "5rem" }, 
        textAlign: { xs: "center", md: "left" },
        minHeight: { xs: "4rem", md: "5rem" },
        fontWeight: "bold",
      }}
    >
      <Typography
        component="span"
        variant="h2"
        sx={{ color: "#D4BBA0", fontWeight: "bold" }}
      >
        HOLA!{" "}
      </Typography>
      <br />
      Soy{" "}
      <Typography
        component="span"
        variant="h1"
        sx={{ color: "#D4BBA0", fontWeight: "bold",fontSize: { xs: "4rem", md: "5rem" },  }}
      >
        {text}
      </Typography>
      <Box
        component="span"
        sx={{
          animation: "blink 1s infinite",
          "@keyframes blink": {
            "0%": { opacity: 1 },
            "50%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        }}
      >
        |
      </Box>
    </Typography>
  ),
  image: Foto,
  description: null,
},
    // Slide 2: Descripción y segunda foto
    {
      title: (
           <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2rem", md: "2.5rem" },
        fontWeight: "bold",
        color: "#111827",
        marginBottom: "1rem",
        textAlign: { xs: "center", md: "left" },
        minHeight: { xs: "4rem", md: "5rem" },
      }}
    >
     
      <Typography
        component="span"

        sx={{ color: "#D4BBA0", fontWeight: "bold",fontSize: { xs: "2rem", md: "5rem" }, }}
      >
      &lt;   Desarrolladora Frontend  /&gt;
      </Typography>
    
      <Box
        component="span"
        sx={{
           color: "#D4BBA0",
          animation: "blink 1s infinite",
          "@keyframes blink": {
            "0%": { opacity: 1 },
            "50%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          ml: 0.5,
        }}
      >
        _
      </Box>
    </Typography>
      ),
      image: Foto2,
      description: (
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem" },
            color: "#333",
            marginBottom: "2rem",
            textAlign: { xs: "center", md: "left" }
          }}
        >
          Apasionada por crear experiencias web atractivas y funcionales.
          <br/>
          Me especializo en React y diseño responsivo.
        </Typography>
      )
    }
  ];

  // Efecto para la animación de escritura
  useEffect(() => {
    if (currentSlide !== 0) return; // Solo animar en el primer slide

    const handleType = () => {
      const fullText = name;

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Esperar 2 segundos antes de borrar
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, name, currentSlide]);

  // Efecto para el carrusel automático
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Cambiar cada 7 segundos

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F5",
        minHeight: "65vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "2rem 1rem", md: "6rem 8rem" },
        gap: "2rem",
        flexDirection: { xs: "column", md: "row" },
        position: "relative"
      }}
    >
      {/* Controles del carrusel */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: { xs: "5px", md: "20px" },
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.2)"
          },
          zIndex: 10
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          right: { xs: "5px", md: "20px" },
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.2)"
          },
          zIndex: 10
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Indicadores de slides */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 10,

        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: currentSlide === index ? "#111827" : "#ccc",
              cursor: "pointer",
              transition: "background-color 0.3s",

            }}
          />
        ))}
      </Box>

      {/* Contenedor de texto */}
      <Box sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        order: { xs: 1, md: 1 }
      }}>
        <Fade in={true} key={currentSlide} timeout={500}>
          <Box>
            {slides[currentSlide].title}
            {slides[currentSlide].description}
          </Box>
        </Fade>

        <Box sx={{
          display: { xs: "none", md: "flex" },
          gap: "1rem",
          flexWrap: "wrap",
          mt: 2
        }}>
          <Button
            component={Link}
            to="/Proyectos"
            variant="contained"
            sx={{
              backgroundColor: "#111827",
              color: "#F7F7F5",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#2D3748"
              }
            }}
          >
            Ver proyectos
          </Button>
          <Button
            component={Link}
            to="/Contacto"
            variant="contained"
            sx={{
              backgroundColor: "#D4BBA0",
              color: "#111827",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#C4AB90"
              }
            }}
          >
            Contáctame
          </Button>
          <Button
            href="/CV.pdf"
            variant="outlined"
            sx={{
              border: "2px solid #111827",
              color: "#111827",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              fontWeight: "bold",
              "&:hover": {
                border: "2px solid #111827",
                backgroundColor: "rgba(17, 24, 39, 0.04)"
              }
            }}
          >
            Descargar CV
          </Button>
        </Box>
      </Box>

      {/* Contenedor de imagen */}
      <Fade in={true} key={currentSlide} timeout={500}>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "transparent",
            height: { xs: "350px", md: "400px", lg: "500px" },
            width: { xs: "280px", md: "280px", lg: "350px" },
            borderRadius: "50%",
            margin: { xs: "1rem auto", md: "0" },
            transform: "perspective(500px) rotateX(5deg)",
            order: { xs: 2, md: 2 }
          }}
        >
          <Box
            component="img"
            src={slides[currentSlide].image}
            alt="Foto de perfil"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          />
        </Paper>
      </Fade>

      {/* Botones para móviles */}
      <Box sx={{
        display: { xs: "flex", md: "none" },
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        order: { xs: 3, md: 3 },
        mt: 2
      }}>
        <Button
          component={Link}
          to="/Proyectos"
          variant="contained"
          sx={{
            backgroundColor: "#111827",
            color: "#F7F7F5",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#2D3748"
            }
          }}
        >
          Ver proyectos
        </Button>
        <Button
          component={Link}
          to="/Contacto"
          variant="contained"
          sx={{
            backgroundColor: "#D4BBA0",
            color: "#111827",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#C4AB90"
            }
          }}
        >
          Contáctame
        </Button>
        <Button
          href="/CV.pdf"
          variant="outlined"
          sx={{
            border: "2px solid #111827",
            color: "#111827",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            "&:hover": {
              border: "2px solid #111827",
              backgroundColor: "rgba(17, 24, 39, 0.04)"
            }
          }}
        >
          Descargar CV
        </Button>
      </Box>
    </Box>
  );
}
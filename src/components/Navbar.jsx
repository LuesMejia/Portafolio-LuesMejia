import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";

export default function Navbar({ dark, setDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // 👈 ruta actual

  const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Proyectos", path: "/Proyectos" },
    { title: "Acerca De", path: "/Acerca-De" },
    { title: "Conocimientos", path: "/Conocimientos" },
    { title: "Contacto", path: "/Contacto" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer para móvil
  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: dark ? "#111827" : "#F7F7F5",
        height: "100%",
      }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navLinks.map((link) => (
          <ListItemButton
            key={link.title}
            component={Link}
            to={link.path}
            selected={location.pathname === link.path} // 👈 marca la ruta actual
            sx={{
              color: dark ? "#F7F7F5" : "#111827",
              "&.Mui-selected": {
                backgroundColor: dark ? "#333" : "#E7D8C9", // color al estar activo
                fontWeight: "bold",
              },
              "&.Mui-selected:hover": {
                backgroundColor: dark ? "#444" : "#E7D8C9",
              },
            }}
          >
            <ListItemText primary={link.title} />
          </ListItemButton>
        ))}
        <ListItemButton onClick={() => setDark(!dark)}>
          <ListItemText primary={dark ? "🌙" : "☀️"} />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: dark ? "#111827" : "#F7F7F5",
          color: dark ? "#F7F7F5" : "#111827",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={dark ? logo2 : logo}
              alt="Logo"
              style={{ height: "40px" }}
            />
          </Box>

          {/* Links desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                component={Link}
                to={link.path}
               sx={{
  color:
    location.pathname === link.path
      ? "#D4BBA0" // 👈 color destacado cuando está activo
      : dark
      ? "#F7F7F5"
      : "#111827",
  fontWeight: location.pathname === link.path ? "bold" : 500,
  borderBottom:
    location.pathname === link.path
      ? `2px solid ${dark ? "#F7F7F5" : "#D4BBA0"}`
      : "none",
}}

              >
                {link.title}
              </Button>
            ))}
            <Button
              onClick={() => setDark(!dark)}
              sx={{ color: dark ? "#F7F7F5" : "#111827" }}
            >
              {dark ? "🌙" : "☀️"}
            </Button>
          </Box>

          {/* Botón hamburguesa móvil */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
       sx={{
    "& .MuiDrawer-paper": {
      boxShadow: "none", 
    },
  }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

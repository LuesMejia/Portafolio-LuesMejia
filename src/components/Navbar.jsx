import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            sx={{ color: dark ? "#F7F7F5" : "#111827" }}
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
        sx={{ backgroundColor: dark ? "#111827" : "#F7F7F5", color: dark ? "#F7F7F5" : "#111827" }}
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
                  color: dark ? "#F7F7F5" : "#111827",
                  fontWeight: 500,
                }}
              >
                {link.title}
              </Button>
            ))}
            <Button onClick={() => setDark(!dark)} sx={{ color: dark ? "#F7F7F5" : "#111827" }}>
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
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

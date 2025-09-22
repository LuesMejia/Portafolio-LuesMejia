import React from "react";
import { Box, Typography, Grid, Card, CardContent, LinearProgress } from "@mui/material";
import ReactIcon from "../img/react.png";
import MuiIcon from "../img/mui.png";
import HtmlIcon from "../img/html.png";
import CssIcon from "../img/css.png";
import JsIcon from "../img/js.png";
import NodeIcon from "../img/node.png";
import MysqlIcon from "../img/mysql.png";
import PostgresIcon from "../img/postgres.png";
import GithubIcon from "../img/github.png";
import FigmaIcon from "../img/figma.png";
import PostmanIcon from "../img/postman.png";
import PowerBiIcon from "../img/powerbi.png";



const skills = {
    frontend: [
        { name: "React JS", icon: ReactIcon, level: 90 },
        { name: "Material UI", icon: MuiIcon, level: 80 },
        { name: "HTML", icon: HtmlIcon, level: 85 },
        { name: "CSS", icon: CssIcon, level: 80 },
        { name: "JavaScript", icon: JsIcon, level: 95 },
    ],
    backend: [
        { name: "Node JS", icon: NodeIcon, level: 70 },
        { name: "MySQL", icon: MysqlIcon, level: 70 },
        { name: "Postgres", icon: PostgresIcon, level: 70 },
    ],
    others: [
        { name: "GitHub", icon: GithubIcon, level: 85 },
        { name: "Figma", icon: FigmaIcon, level: 80 },
        { name: "Postman", icon: PostmanIcon, level: 95 },
        { name: "Power Bi", icon: PowerBiIcon, level: 90 },
    ],
};

export default function Skills({ dark }) {
    return (
        <Box
            sx={{
                backgroundColor: dark ? "#111827" : "#F7F7F5",
                color: dark ? "#F7F7F5" : "#111827",
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
                        "100%": { width: "15ch" },
                    },
                    "@keyframes blink": {
                        "0%": { borderColor: "#111827" },
                        "100%": { borderColor: "transparent" },
                    },
                }}
            >
                Conocimientos_
            </Typography>

            {/* FRONTEND */}
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Frontend
            </Typography>
            <Grid container spacing={3} mb={4}>
                {skills.frontend.map((skill) => (
                    <Grid item xs={12} sm={6} md={3} key={skill.name}>
                        <Card
                            sx={{
                                textAlign: "center",
                                borderRadius: 3,
                                boxShadow: 2,
                                backgroundColor: dark ? "#1F2937" : "#D4BBA0",
                              height: 320, // Aumenté de 280 a 320
        minWidth: 280, // Añadí un ancho mínimo
                                display: "flex",
                                flexDirection: "column",
                            }}
                        ><CardContent sx={{ 
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2rem", // Aumenté de 1.5rem a 2rem
    "&:last-child": { paddingBottom: "2rem" }
}}>

                                <Box>
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        style={{
                                             width: "90px", // Aumenté de 70px a 90px
        height: "90px", // Aumenté de 70px a 90px
        objectFit: "contain",
        marginBottom: "1.5rem", // Aumenté el margen
                                        }}
                                    />
                                    <Typography variant="h6" sx={{ mb: 2 }}>{skill.name}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.level}
                                        sx={{
                                            height: 10,
                                            borderRadius: 5,
                                            flexGrow: 1,
                                            backgroundColor: dark ? "#374151" : "#E0E0E0",
                                            "& .MuiLinearProgress-bar": {
                                                backgroundColor: dark ? "#D4BBA0" : "#111827",
                                            },
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ minWidth: 35, textAlign: "right" }}>
                                        {skill.level}%
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* BACKEND */}
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Backend
            </Typography>
            <Grid container spacing={3} mb={4}>
                {skills.backend.map((skill) => (
                    <Grid item xs={12} sm={6} md={3} key={skill.name}>
                        <Card
                            sx={{
                                textAlign: "center",
                                borderRadius: 3,
                                boxShadow: 2,
                                backgroundColor: dark ? "#1F2937" : "#D4BBA0",
                            height: 320, // Aumenté de 280 a 320
        minWidth: 280, // Añadí un ancho mínimo
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardContent sx={{ 
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                padding: "1.5rem",
                                "&:last-child": { paddingBottom: "1.5rem" }
                            }}>
                                <Box>
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        style={{
                                             width: "90px", // Aumenté de 70px a 90px
        height: "90px", // Aumenté de 70px a 90px
        objectFit: "contain",
        marginBottom: "1.5rem", // Aumenté el margen
                                        }}
                                    />
                                    <Typography variant="h6" sx={{ mb: 2 }}>{skill.name}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.level}
                                        sx={{
                                            height: 10,
                                            borderRadius: 5,
                                            flexGrow: 1,
                                            backgroundColor: dark ? "#374151" : "#E0E0E0",
                                            "& .MuiLinearProgress-bar": {
                                                backgroundColor: dark ? "#D4BBA0" : "#111827",
                                            },
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ minWidth: 35, textAlign: "right" }}>
                                        {skill.level}%
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* OTROS */}
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Otros
            </Typography>
            <Grid container spacing={3}>
                {skills.others.map((skill) => (
                    <Grid item xs={12} sm={6} md={3} key={skill.name}>
                        <Card
                            sx={{
                                textAlign: "center",
                                borderRadius: 3,
                                boxShadow: 2,
                                backgroundColor: dark ? "#1F2937" : "#D4BBA0",
                          height: 320, // Aumenté de 280 a 320
        minWidth: 280, // Añadí un ancho mínimo
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardContent sx={{ 
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                padding: "1.5rem",
                                "&:last-child": { paddingBottom: "1.5rem" }
                            }}>
                                <Box>
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        style={{
                                            width: "90px", // Aumenté de 70px a 90px
        height: "90px", // Aumenté de 70px a 90px
        objectFit: "contain",
        marginBottom: "1.5rem", // Aumenté el margen
                                        }}
                                    />
                                    <Typography variant="h6" sx={{ mb: 2 }}>{skill.name}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.level}
                                        sx={{
                                            height: 10,
                                            borderRadius: 5,
                                            flexGrow: 1,
                                            backgroundColor: dark ? "#374151" : "#E0E0E0",
                                            "& .MuiLinearProgress-bar": {
                                                backgroundColor: dark ? "#D4BBA0" : "#111827",
                                            },
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ minWidth: 35, textAlign: "right" }}>
                                        {skill.level}%
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}


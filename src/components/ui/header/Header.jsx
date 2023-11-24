import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Typography
      variant="h4"
      component="div"
      sx={{
        padding: "1rem 0",
        backgroundColor: "#27374D",
        color: "#DDE6ED",
        textAlign: "center",
      }}
    >
      <Link to="/news" style={{ textDecoration: "none", color: "#DDE6ED" }}>
        DW news
      </Link>
    </Typography>
  );
};

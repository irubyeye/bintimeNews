import React from "react";
import { Container, Paper, Typography, Link, Grid } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Paper
      elevation={3}
      square
      style={{
        marginTop: "20px",
        padding: "20px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container component="footer" maxWidth="md">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6" color="textPrimary">
              Dw news
            </Typography>
            <Typography variant="body2" color="textSecondary">
              &copy; {currentYear} All rights reserved
            </Typography>
          </Grid>
          <Grid item xs={0}>
            <Link
              href="mailto:email@example.com"
              color="inherit"
              underline="hover"
              style={{ marginLeft: "auto" }}
            >
              email@example.com
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

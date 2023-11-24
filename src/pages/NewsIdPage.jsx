import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { formatDate } from "../utils/formatTime";
import MyButton from "../components/ui/button/MyButton";
import { ArrowUpward } from "@mui/icons-material";
import { Header } from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";

export default function NewsIdPage() {
  const { state } = useLocation();
  const article = state?.article;

  if (!article) {
    return <h1>No info about page</h1>;
  }

  const handleReadFull = () => {
    window.open(article.url, "_blank");
  };

  return (
    <>
      <Header />
      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {formatDate(article.publishedAt)} | Source:{" "}
            {article.source ? article.source.name : "Unknown"}
          </Typography>
          <img
            src={article.urlToImage}
            alt={article.title}
            style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
          />
          <Typography variant="body1" paragraph>
            {article.description}
          </Typography>
          <Typography variant="body1" paragraph>
            {article.content}
          </Typography>
          <MyButton startIcon={<ArrowUpward />} onClick={handleReadFull}>
            Read full
          </MyButton>
        </Paper>
      </Container>
      <Footer></Footer>
    </>
  );
}

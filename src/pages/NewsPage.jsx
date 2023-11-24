import React, { useEffect, useState } from "react";
import NewsGrid from "../components/newsComponents/NewsGrid";
import { Header } from "../components/ui/header/Header";
import MyButton from "../components/ui/button/MyButton";
import SearchField from "../components/ui/searchField/SearchField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import NewsService from "../api/newsService";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/ui/loader/Loader";
import { Grid, Typography } from "@mui/material";
import { useNews } from "../hooks/useNews";
import NewsFilter from "../components/newsComponents/NewsFilter";
import Footer from "../components/ui/footer/Footer";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [limit, setLimit] = useState(100);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState({ country: "us", category: "" });
  const searchedNews = useNews(news, searchText);
  const [anchorEl, setAnchorEl] = useState(null);

  const [fetchNews, isNewsLoading, newsError] = useFetch(async () => {
    const response = await NewsService.getNews(
      limit,
      page,
      filter.country,
      filter.category,
      searchText,
    );
    setNews(response.data);
  });

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetchNews();
  }, [filter]);

  return (
    <>
      <Header />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "10px" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{ color: "#27374D", marginBottom: "5px" }}
          >
            DW top headlines
          </Typography>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <SearchField setSearchText={setSearchText} fetchNews={fetchNews} />
          <MyButton
            style={{ marginLeft: "15px" }}
            onClick={handleMenuClick}
            startIcon={<FilterAltIcon />}
          >
            Filters
          </MyButton>
          <NewsFilter
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            handleClose={handleClose}
            filter={filter}
            setFilter={setFilter}
          />
        </Grid>
        {newsError && (
          <Typography variant="h6">Something went wrong</Typography>
        )}
        {isNewsLoading ? (
          <Loader />
        ) : (
          <Grid item xs={6} sx={{ marginTop: "20px" }}>
            <NewsGrid
              news={searchedNews}
              limit={limit}
              page={page}
              setPage={setPage}
              setLimit={setLimit}
              searchText={searchText}
            />
          </Grid>
        )}
      </Grid>
      <Footer />
    </>
  );
}

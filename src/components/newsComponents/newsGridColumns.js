import Box from "@mui/material/Box";
import { formatDate } from "../../utils/formatTime";
import LinkIcon from "@mui/icons-material/Link";
import * as React from "react";

export const columns = [
  {
    field: "urlToImage",
    headerName: "Image",
    width: 200,
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={
            params.value
              ? params.value
              : "https://st.depositphotos.com/47577860/52670/v/450/depositphotos_526702626-stock-illustration-gallery-photo-picture-icon-outline.jpg"
          }
          alt={params.row.title}
          style={{
            width: "100%",
            maxHeight: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    ),
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params) => (
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          whiteSpace: "normal",
          overflow: "hidden",
          display: "-webkit-box",
          maxHeight: "5em",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
      >
        {params.value}
      </Box>
    ),
  },
  {
    field: "author",
    headerName: "Authors",
    width: 200,
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params) => (
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          whiteSpace: "normal",
          overflow: "hidden",
          display: "-webkit-box",
          maxHeight: "5em",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
      >
        {params.value}
      </Box>
    ),
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params) => (
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          whiteSpace: "normal",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
      >
        {params.value}
      </Box>
    ),
  },
  {
    field: "publishedAt",
    headerName: "Publication Date",
    width: 200,
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params) => (
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          maxHeight: "3em",
          textOverflow: "ellipsis",
        }}
      >
        {formatDate(params.value)}
      </Box>
    ),
  },
  {
    field: "url",
    headerName: "Original Url",
    width: 100,
    headerAlign: "center",
    disableColumnMenu: true,
    renderCell: (params) => (
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          <LinkIcon />
        </a>
      </Box>
    ),
  },
];

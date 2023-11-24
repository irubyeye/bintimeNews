import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Tooltip } from "@mui/material";

export default function SearchField({ setSearchText, fetchNews }) {
  return (
    <Paper
      component="form"
      sx={{ p: "1px 2px", display: "flex", alignItems: "center", width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search through the grid"
        inputProps={{ "aria-label": "Search article" }}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <Tooltip title="Global Search" arrow>
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={fetchNews}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
}

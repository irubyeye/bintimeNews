import React from "react";
import {
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

export default function NewsFilter({
  anchorEl,
  handleClose,
  filter,
  setFilter,
}) {
  const clearFilters = () => {
    setFilter({ country: "us", category: "" });
    handleClose();
  };

  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem>
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            value={filter.country}
            onChange={(e) => setFilter({ ...filter, country: e.target.value })}
          >
            <MenuItem value="us">United States</MenuItem>
            <MenuItem value="cn">China</MenuItem>
            <MenuItem value="in">India</MenuItem>
            <MenuItem value="jp">Japan</MenuItem>
            <MenuItem value="de">Germany</MenuItem>
            <MenuItem value="br">Brazil</MenuItem>
            <MenuItem value="pl">Poland</MenuItem>
          </Select>
        </FormControl>
      </MenuItem>
      <MenuItem>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
            <MenuItem value="general">General</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
          </Select>
        </FormControl>
      </MenuItem>
      <MenuItem>
        <Button onClick={clearFilters} fullWidth>
          Clear Filters
        </Button>
      </MenuItem>
    </Menu>
  );
}

import React from "react";
import Button from "@mui/material/Button";

export default function MyButton({ children, ...props }) {
  return (
    <Button
      sx={{
        backgroundColor: "#526D82",
        ":hover": { backgroundColor: "#27374D" },
      }}
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  );
}

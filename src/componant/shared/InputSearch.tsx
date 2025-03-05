import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function InputSearch({
  valueSearch,
  setValueSearch,
}: {
  valueSearch: string | null;
  setValueSearch: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <TextField
      variant="standard"
      placeholder=" ابحث..."
      value={valueSearch || ""}
      onChange={(e) => setValueSearch(e.target.value)}
      sx={{
        maxWidth: 300,

        marginBottom: "20px",
        "& .MuiInputBase-root": {
          fontSize: "1.1rem",
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "gray",
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: "gray",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search color="disabled" />
          </InputAdornment>
        ),
      }}
    />
  );
}

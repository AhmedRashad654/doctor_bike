import { Select, MenuItem, FormControl } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function SearchByCity({
  valueSearch,
  setValueSearch,
  options,
}: {
  valueSearch: string | null;
  setValueSearch: Dispatch<SetStateAction<string | null>>;
  options: string[];
}) {
  return (
    <FormControl variant="standard" sx={{ width: 200, marginBottom: "20px" }}>
      <Select
        value={valueSearch || ""}
        onChange={(e) => setValueSearch(e.target.value)}
        displayEmpty
        sx={{ color: "#777" }}
      >
        <MenuItem value=""> بحث بالمدينة...</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

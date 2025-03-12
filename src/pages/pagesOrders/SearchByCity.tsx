import { Select, MenuItem, FormControl } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ICity } from "../../types/cities";

export default function SearchByCity({
  valueSearch,
  setValueSearch,
  options,
}: {
  valueSearch: number;
  setValueSearch: Dispatch<SetStateAction<number>>;
  options: ICity[];
  }) {
  
  return (
    <FormControl variant="standard" sx={{ width: 200, marginBottom: "20px" }}>
      <Select
        value={valueSearch || 0}
        onChange={(e) => setValueSearch(Number(e.target.value))}
        displayEmpty
        sx={{ color: "#777" }}
      >
        <MenuItem value={0}>كل المدن ...</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.cityNameAr}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

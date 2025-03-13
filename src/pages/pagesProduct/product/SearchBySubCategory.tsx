import { Select, MenuItem, FormControl } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ISubCategory } from "../../../types/subCategory";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchSubCategory } from "../../../redux/features/subCategorySlice";

export default function SearchBySubCategory({
  valueSearch,
  setValueSearch,
  options,
}: {
  valueSearch: number | null;
  setValueSearch: Dispatch<SetStateAction<number | null>>;
  options: ISubCategory[];
}) {
  // fetch sub category
  const subCategory = useAppSelector((state) => state?.subCategory);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (subCategory.status === "idle") {
      dispatch(fetchSubCategory());
    }
  }, [dispatch, subCategory.status]);

  // initial state for select
  useEffect(() => {
    if (subCategory?.data?.length > 0 && valueSearch === null) {
      setValueSearch(subCategory.data[0].id);
    }
  }, [setValueSearch, subCategory.data, valueSearch]);

  return (
    <FormControl variant="standard" sx={{ width: 200, marginBottom: "20px" }}>
      <Select
        value={valueSearch ?? ""}
        onChange={(e) => setValueSearch(Number(e.target.value))}
        displayEmpty
        sx={{ color: "#777" }}
      >
        {options?.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.nameAr}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

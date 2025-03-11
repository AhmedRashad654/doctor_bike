import { Stack } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

export default function NavbarCategory() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const mainCategory = useAppSelector((state) => state?.mainCategory?.data);
  return (
    <Stack
      sx={{
        paddingY: "15px",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "30px",
        flexWrap: "wrap",
      }}
      direction="row"
    >
      {mainCategory?.map((item) => (
        <Link
          to={`/dashboard/subCategory?category=${item?.id}`}
          key={item.id}
          className={` font-semibold text-[1.1rem] p-[10px] transition ${
            category === item.id.toString() ? "link-active" : "not-active"
          }`}
        >
          {item.nameEng}
        </Link>
      ))}
    </Stack>
  );
}

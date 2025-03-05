import { Stack } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

export default function NavbarCategory() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const links = [
    {
      path: "/dashboard/subCategory?category=mobile",
      name: "موبايل",
      active: "mobile",
    },
    {
      path: "/dashboard/subCategory?category=labtop",
      name: "لابتوب",
      active: "labtop",
    },
    {
      path: "/dashboard/subCategory?category=electronic",
      name: "الكترونيات",
      active: "electronic",
    },
  ];
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
      {links.map((item) => (
        <Link
          to={item.path}
          key={item.path}
          className={` font-semibold text-[1.1rem] p-[10px] transition ${
            category === item.active ? "link-active" : "not-active"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </Stack>
  );
}

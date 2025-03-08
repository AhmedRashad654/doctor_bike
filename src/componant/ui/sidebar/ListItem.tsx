import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { ListItemProps } from "../../../types/INavbar";
import { useNavigate } from "react-router-dom";

function ListItem({ item, toggleMenu, openMenus }: ListItemProps) {
  const navigate = useNavigate();
  return (
    <ListItemButton
      onClick={() =>
        item?.route ? navigate(item?.route) : toggleMenu(item.name)
      }
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        width: "100%",
        backgroundColor:
          openMenus[item.name] && item?.subLinks ? "secondary.main" : "",
        mt: "2px",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.name}
          slotProps={{ primary: { sx: { fontWeight: "bold" } } }}
          sx={{ mr: "-15px" }}
        />
      </Stack>
      {item?.subLinks && item?.subLinks ? (
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "secondary.main",
            height: openMenus[item.name]
              ? item?.name === "طلبات الشراء"
                ? "140px"
                : "95px"
              : 0,
            width: "3px",
            borderRadius: "5px",
            top: "50px",
            right: "30px",
            transition: "0.2s all",
          }}
        />
      ) : (
        ""
      )}

      {item.subLinks &&
        (openMenus[item.name] ? <ExpandMore /> : <ExpandLess />)}
    </ListItemButton>
  );
}

export default ListItem;

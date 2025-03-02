import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { CollapseSideBarProps } from "../../../types/INavbar";

function CollapseSideBar({ item, openMenus }: CollapseSideBarProps) {
  return (
    <Collapse
      in={openMenus[item.name]}
      timeout="auto"
      unmountOnExit
      sx={{ mt: "4px" }}
    >
      <List
        component="div"
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginRight: "35px",
          gap: "3px",
          width: "100%",
        }}
      >
        {item.subLinks?.map((subLink) => (
          <ListItemButton
            key={subLink?.name}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <ListItemIcon>{subLink.icon}</ListItemIcon>
              <ListItemText
                primary={subLink?.name}
                sx={{ mr: "-15px" }}
                slotProps={{ primary: { sx: { fontWeight: "550" } } }}
              />
            </Stack>
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );
}

export default CollapseSideBar;

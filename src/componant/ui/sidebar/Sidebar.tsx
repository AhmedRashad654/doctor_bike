import {
  Drawer,
  Stack,
  List,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import HeaderSidebar from "./HeaderSidebar";
import { menuItems } from "./MenuDate";
import ListItem from "./ListItem";
import CollapseSideBar from "./CollapseSideBar";
import { useMediaQuery } from "@mui/material";
import OpenAndCloseSidebar from "./OpenAndCloseSidebar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../../redux/hooks";
import { setLogout } from "../../../redux/features/userSlice";
function Sidebar() {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen((prev) => !prev);
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");
  const toggleMenu = (name: string) =>
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  function handleLogout() {
    dispatch(setLogout());
    
  }
  return (
    <>
      {isSmallScreen && !open && (
        <OpenAndCloseSidebar toggleSidebar={toggleSidebar} />
      )}
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        anchor="right"
        open={open}
        onClose={toggleSidebar}
        ModalProps={{
          keepMounted: true,
          disableAutoFocus: true,
          disableEnforceFocus: true,
        }}
        sx={{
          transition: "width 0.3s",
          "& .MuiDrawer-paper": { width: 290, overflowX: "hidden" },
        }}
      >
        <Stack
          sx={{
            paddingY: "15px",
          }}
        >
          <HeaderSidebar />
          <List>
            {menuItems.map((item) => (
              <Box key={item.name}>
                <ListItem
                  item={item}
                  toggleMenu={toggleMenu}
                  openMenus={openMenus}
                />
                {item.subLinks && (
                  <CollapseSideBar item={item} openMenus={openMenus} />
                )}
              </Box>
            ))}
          </List>

          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              width: "100%",
            }}
            onClick={handleLogout}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary={"تسجيل الخروج"}
                slotProps={{ primary: { sx: { fontWeight: "bold" } } }}
                sx={{ mr: "-15px" }}
              />
            </Stack>
          </ListItemButton>
        </Stack>
      </Drawer>
    </>
  );
}
export default Sidebar;

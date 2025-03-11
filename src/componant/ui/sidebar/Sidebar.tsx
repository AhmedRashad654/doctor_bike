import {
  Drawer,
  Stack,
  List,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import HeaderSidebar from "./HeaderSidebar";
import { getMenuItems } from "./MenuDate";
import ListItem from "./ListItem";
import CollapseSideBar from "./CollapseSideBar";
import { useMediaQuery } from "@mui/material";
import OpenAndCloseSidebar from "./OpenAndCloseSidebar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLogout } from "../../../redux/features/userSlice";
import { fetchMainCategory } from "../../../redux/features/mainCategorySlice";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const mainCategory = useAppSelector((state) => state?.mainCategory);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen((prev) => !prev);
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");
  const toggleMenu = (name: string) =>
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  function handleLogout() {
    dispatch(setLogout());
  }
  useEffect(() => {
    if (mainCategory.status === "idle") {
      dispatch(fetchMainCategory());
    }
  }, [dispatch, mainCategory.status]);
  const menuItems = getMenuItems(mainCategory?.data[0]?.id?.toString() || "");
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

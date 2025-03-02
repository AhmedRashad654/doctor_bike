import { Drawer, Stack, List, Box } from "@mui/material";
import { useState } from "react";
import HeaderSidebar from "./HeaderSidebar";
import { menuItems } from "./MenuDate";
import ListItem from "./ListItem";
import CollapseSideBar from "./CollapseSideBar";
import { useMediaQuery } from "@mui/material";
import OpenAndCloseSidebar from "./OpenAndCloseSidebar";

function Sidebar() {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen((prev) => !prev);
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");
  const toggleMenu = (name: string) =>
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));

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
        </Stack>
      </Drawer>
    </>
  );
}
export default Sidebar;

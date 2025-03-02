import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function OpenAndCloseSidebar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <IconButton
      onClick={toggleSidebar}
      sx={{
        position: "fixed",
        top: 15,
        right: 15,
        zIndex: 1300,
        backgroundColor: "white",
        boxShadow: 3,
      }}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default OpenAndCloseSidebar;

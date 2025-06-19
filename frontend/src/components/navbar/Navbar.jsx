import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

import Typography from "@mui/material/Typography";
import Menu from "./Menu";
import ShortMenu from "./ShortMenu";
import logo from "../../assets/Logo CBI App.png";
import IconButton from "@mui/material/IconButton";

const drawerWidth = 240;
const shortDrawerWidth = 80;

export default function Navbar({ content }) {
  const [isBigMenu, setIsBigMenu] = React.useState(false);

  const changeMenu = () => setIsBigMenu(!isBigMenu);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            sx={{ marginRight: "22px", color: "white" }}
            onClick={changeMenu}
          >
            {isBigMenu ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <img src={logo} alt="Logo" width="170" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isBigMenu ? drawerWidth : shortDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isBigMenu ? drawerWidth : shortDrawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {isBigMenu ? <Menu /> : <ShortMenu />}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}

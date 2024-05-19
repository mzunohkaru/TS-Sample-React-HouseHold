import { Box, Drawer } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { NavLink } from "react-router-dom";
import { CSSProperties } from "react";

type SidebarProps = {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
};

type menuItem = {
  text: string;
  path: string;
  icon: React.ComponentType;
};
const baseLinkStyle: CSSProperties = {
  textDecoration: "none",
  color: "inherit",
  display: "block",
};
const activeLinkStyle: CSSProperties = {
  background: "rgba(0,0,0,0.08)",
};

export default function SideBar({
  drawerWidth,
  mobileOpen,
  handleDrawerClose,
  handleDrawerTransitionEnd,
}: SidebarProps) {
  const MenuItem: menuItem[] = [
    { text: "Home", path: "/", icon: HomeIcon },
    { text: "Report", path: "/report", icon: EqualizerIcon },
  ];

  // Drawer List
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {MenuItem.map((item, index) => (
          <NavLink
            key={item.text}
            to={item.path}
            // isActive : Select = True, Unselect = False
            style={({ isActive }) => {
              return {
                // ... : baseLinkStyleの全ての要素を展開する
                ...baseLinkStyle,
                ...(isActive ? activeLinkStyle : {}),
              };
            }}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      {/* Mobile */}
      <Drawer
        // トリガーをきっかけにDrawerを表示・非表示する
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        // sx : インラインでCSSを指定
        sx={{
          // xs : 0ピクセル以上で表示
          // md : 900px以上で非表示
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop */}
      <Drawer
        // 永久表示
        variant="permanent"
        sx={{
          // xs : 0ピクセル以上で非表示
          // md : 900px以上で表示
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

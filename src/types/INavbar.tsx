import { JSX } from "react";

export interface MenuItem {
  name: string;
  icon: JSX.Element;
  route?: string;
  subLinks?: { name: string; icon: JSX.Element; route?: string }[];
}

export interface ListItemProps {
  item: MenuItem;
  toggleMenu: (name: string) => void;
  openMenus: { [key: string]: boolean };
}

export interface CollapseSideBarProps {
  item: MenuItem;
  openMenus: { [key: string]: boolean };
}

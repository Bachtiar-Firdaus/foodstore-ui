import * as React from "react";
import { SideNav, LayoutSidebar } from "upkit";
import menus from "./menus";

export default function Home() {
  return (
    <div>
      <LayoutSidebar sidebar={<SideNav items={menus} verticalAlign="top" />} />
    </div>
  );
}

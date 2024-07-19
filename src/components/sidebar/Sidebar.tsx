import { useTheme } from "@/src/context/ThemeProvider";
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  //   const { theme, toggle } = useTheme()!;

  return (
    <aside>
      <div className={styles.logo}>Wallet</div>
    </aside>
  );
};

export default Sidebar;

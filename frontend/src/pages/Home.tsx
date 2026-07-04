import styles from "../styles/header.module.css";
import { useState } from "react";

import Header from "./Header";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import HeaderTitle from "./HeaderTitle";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleClickOpen = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Header drawerOpen={drawerOpen} handleClickOpen={handleClickOpen} />
      <HeaderTitle />
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </>
  );
};

export default Home;
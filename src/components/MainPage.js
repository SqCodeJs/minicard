import React, { useState } from "react";
import MiniCard from "./MiniCard";
import HamburgerButton from "./common/HamburgerButton";

import { Hamburger, PageWrapp } from "./../style";

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const handleHamburgerToggle = () => setOpen((prev) => !prev);

  return (
    <PageWrapp>
      <Hamburger>
        <HamburgerButton
          open={open}
          handleHamburgerToggle={handleHamburgerToggle}
        />
      </Hamburger>

      <MiniCard open={open} handleHamburgerToggle={handleHamburgerToggle} />
    </PageWrapp>
  );
};

export default MainPage;

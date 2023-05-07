import React, { useState } from "react";
import classes from "./Header.module.css";
import clsx from "clsx";

const Header = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <header className={classes.header}>
      <span>v 28/04</span>
      <button onClick={() => setShow((s) => !s)}>Управление</button>
      <div
        className={clsx(
          `items-center bg-gray-100 border-solid border-2 overflow-hidden inset-x-0
          top-16 mt-2 p-2 absolute flex-col gap-y-2 `,
          show ? "flex" : "hidden"
        )}
      >
        {children}
        <button className="w-2/3" onClick={() => setShow(false)}>
          X
        </button>
      </div>
    </header>
  );
};

export default Header;

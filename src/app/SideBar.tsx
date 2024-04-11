import React from "react";
import SideBarOne from "./SideBarOne";
import SideBarTwo from "./SideBarTwo";

function SideBar(): JSX.Element {
  return (
    <div className="h-full w-full md:w-1/3 flex flex-col gap-5">
      <SideBarOne />
      <SideBarTwo />
    </div>
  );
}

export default SideBar;

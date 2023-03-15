import React from "react";
import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        {/** New Chat */}
        <NewChat />

        <div>{/** ModelSelection */}</div>

        {/** Map throuth the ChatRows */}
      </div>
    </div>
  );
}

export default SideBar;
